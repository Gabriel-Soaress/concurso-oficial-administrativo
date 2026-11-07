import glob
import os
import re
from collections import Counter
from pypdf import PdfReader

def run_scan():
    access_files = glob.glob('prova-auto/provas-access/access_*.pdf')
    access_files.extend(['prova-auto/1.pdf', 'prova-auto/6.pdf'])
    # filter out duplicate paths if any
    access_files = sorted(list(set(access_files)))

    print(f"Total de arquivos de prova encontrados: {len(access_files)}")

    stats = {
        'total_questions': 0,
        'options_count': Counter(),
        'negative_keywords': Counter(),
        'roman_numerals': 0,
        'true_false': 0,
        'column_matching': 0,
        'gap_fill': 0,
        'hypothetical_scenario': 0,
        'literal_law': 0,
        'command_patterns': Counter(),
        'portugues_patterns': Counter(),
        'matematica_patterns': Counter()
    }

    samples = {
        'negative': [],
        'roman': [],
        'true_false': [],
        'gap_fill': [],
        'column_matching': [],
        'hypothetical': [],
        'math_problem': [],
        'portuguese_command': []
    }

    for pdf_path in access_files:
        try:
            reader = PdfReader(pdf_path)
            full_text = ''
            for p in reader.pages:
                t = p.extract_text()
                if t:
                    full_text += '\n' + t
            
            # Split questions
            # Usually 'QUESTÃO 01', 'QUESTÃO 1', 'Questão 01'
            q_matches = list(re.finditer(r'(?:QUESTÃO|Questão)\s+(\d{1,2})', full_text))
            
            for idx, q_match in enumerate(q_matches):
                start_pos = q_match.start()
                end_pos = q_matches[idx+1].start() if idx+1 < len(q_matches) else len(full_text)
                q_text = full_text[start_pos:end_pos].strip()
                q_num = q_match.group(1)
                stats['total_questions'] += 1

                # Detect alternatives: A, B, C, D or A, B, C, D, E
                # Check presence of D) and E)
                has_d = bool(re.search(r'\n\s*\(?[Dd]\)?[\.\s\-]', q_text) or re.search(r'\n\s*D\s*[\)\.\-]', q_text))
                has_e = bool(re.search(r'\n\s*\(?[Ee]\)?[\.\s\-]', q_text) or re.search(r'\n\s*E\s*[\)\.\-]', q_text))
                if has_e:
                    stats['options_count']['5_alternativas (A-E)'] += 1
                elif has_d:
                    stats['options_count']['4_alternativas (A-D)'] += 1
                else:
                    stats['options_count']['indeterminado_ou_outro'] += 1

                # First 350 chars is usually the command/enunciado intro
                intro = q_text[:400]

                # Negative phrasing
                negs = re.findall(r'\b(INCORRETO|INCORRETA|NÃO|EXCETO|DESACORDO|FALSO|FALSA)\b', intro)
                for n in negs:
                    stats['negative_keywords'][n] += 1
                if any(n in intro for n in ['INCORRETO', 'INCORRETA', 'EXCETO', 'DESACORDO']):
                    if len(samples['negative']) < 6:
                        samples['negative'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # Roman numerals
                if re.search(r'\n\s*(?:I|II|III)\s*[\.\-\–]', q_text) or re.search(r'(?:afirmativas|itens|proposições|assertivas)\s+(?:abaixo|a\s+seguir|I)', q_text, re.I):
                    stats['roman_numerals'] += 1
                    if len(samples['roman']) < 6:
                        samples['roman'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # True/False (V ou F)
                if re.search(r'\(\s*[VF]\s*\)', q_text) or ('(V)' in q_text and '(F)' in q_text) or ('verdadeiro' in intro.lower() and 'falso' in intro.lower()):
                    stats['true_false'] += 1
                    if len(samples['true_false']) < 6:
                        samples['true_false'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # Gap filling
                if 'lacuna' in intro.lower() or ('preenche' in intro.lower() and 'respectivamente' in intro.lower()):
                    stats['gap_fill'] += 1
                    if len(samples['gap_fill']) < 6:
                        samples['gap_fill'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # Column matching
                if 'coluna' in intro.lower() or 'relacione' in intro.lower() or 'associe' in intro.lower():
                    stats['column_matching'] += 1
                    if len(samples['column_matching']) < 6:
                        samples['column_matching'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # Hypothetical situation
                if re.search(r'\b(determinado|determinada|certo funcionário|servidor|servidora|carlos|joão|maria|ana|josé|pedro|marcos|lucas)\b', intro, re.I):
                    stats['hypothetical_scenario'] += 1
                    if len(samples['hypothetical']) < 6:
                        samples['hypothetical'].append(f"[{pdf_path} Q{q_num}]\n{intro.strip()}")

                # Literal law
                if re.search(r'\b(de acordo com|nos termos da|conforme a|consoante a|segundo a lei|dispõe a lei|com base na lei)\b', intro, re.I):
                    stats['literal_law'] += 1

                # Specific checks for Portuguese commands
                if any(k in intro.lower() for k in ['assinale a alternativa', 'assinale a opção', 'está correto o que se afirma em', 'o texto', 'sinônimo', 'antônimo', 'concordância', 'regência', 'crase']):
                    m_cmd = re.search(r'(Assinale\s+[^\.\:\n]+[\.\:])', intro, re.I)
                    if m_cmd:
                        stats['command_patterns'][m_cmd.group(1).strip()] += 1

        except Exception as ex:
            print(f"Erro ao processar {pdf_path}: {ex}")

    # Output detailed report
    print("\n================ RESUMO ESTATÍSTICO ================")
    print(f"Total de questões processadas: {stats['total_questions']}")
    print(f"Distribuição de alternativas: {dict(stats['options_count'])}")
    print(f"Questões com termos negativos: {sum(stats['negative_keywords'].values())} ocorrências")
    print(f"Palavras negativas: {dict(stats['negative_keywords'])}")
    print(f"Questões com itens romanos (I, II, III...): {stats['roman_numerals']} ({stats['roman_numerals']/max(1, stats['total_questions'])*100:.1f}%)")
    print(f"Questões com V ou F (Verdadeiro/Falso): {stats['true_false']} ({stats['true_false']/max(1, stats['total_questions'])*100:.1f}%)")
    print(f"Questões de preenchimento de lacunas: {stats['gap_fill']} ({stats['gap_fill']/max(1, stats['total_questions'])*100:.1f}%)")
    print(f"Questões de associação de colunas: {stats['column_matching']} ({stats['column_matching']/max(1, stats['total_questions'])*100:.1f}%)")
    print(f"Questões com situações hipotéticas / caso prático: {stats['hypothetical_scenario']} ({stats['hypothetical_scenario']/max(1, stats['total_questions'])*100:.1f}%)")
    print(f"Questões literais de legislação ('de acordo com...'): {stats['literal_law']} ({stats['literal_law']/max(1, stats['total_questions'])*100:.1f}%)")

    print("\n--- TOP PADRÕES DE COMANDO ENCONTRADOS ---")
    for cmd, cnt in stats['command_patterns'].most_common(15):
        print(f"({cnt}x) {cmd}")

    # Save samples to file for deep inspection
    with open('.agents/access_samples_inspection.txt', 'w', encoding='utf-8') as out:
        out.write("=== AMOSTRAS REAIS EXTRAÍDAS DAS PROVAS ACCESS ===\n\n")
        for cat, items in samples.items():
            out.write(f"\n================ CATEGORIA: {cat.upper()} ({len(items)} amostras) ================\n")
            for it in items:
                out.write(f"\n----------------------------------------\n{it}\n")

    print("\nAmostras detalhadas salvas em .agents/access_samples_inspection.txt")

if __name__ == '__main__':
    run_scan()
