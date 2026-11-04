import os
import re
import subprocess
import markdown
import pypdf
import latex2mathml.converter

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = os.path.abspath(r"semana-01\pdf")
os.makedirs(OUTPUT_DIR, exist_ok=True)

CSS_STYLES = """
@page {
    size: A4;
    margin: 18mm 16mm 20mm 16mm;
    @bottom-right {
        content: "Página " counter(page);
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
    }
    @bottom-left {
        content: "Concurso Oficial Administrativo — Material de Estudo";
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 8pt;
        color: #94a3b8;
    }
}

body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.6;
    color: #1e293b;
    background-color: #ffffff;
}

/* Tipografia */
h1 {
    font-size: 17pt;
    font-weight: 700;
    color: #0f172a;
    border-bottom: 2.5px solid #2563eb;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 14px;
    page-break-after: avoid;
}

h2 {
    font-size: 13pt;
    font-weight: 700;
    color: #1e3a8a;
    border-bottom: 1.5px solid #cbd5e1;
    padding-bottom: 5px;
    margin-top: 22px;
    margin-bottom: 12px;
    page-break-after: avoid;
}

h3 {
    font-size: 11pt;
    font-weight: 600;
    color: #1d4ed8;
    margin-top: 16px;
    margin-bottom: 8px;
    page-break-after: avoid;
}

h4 {
    font-size: 10pt;
    font-weight: 600;
    color: #334155;
    margin-top: 12px;
    margin-bottom: 6px;
    page-break-after: avoid;
}

p {
    margin: 6px 0 10px 0;
    text-align: justify;
}

strong, b {
    font-weight: 700;
    color: #0f172a;
}

em, i {
    font-style: italic;
}

ul, ol {
    margin: 6px 0 12px 0;
    padding-left: 24px;
}

li {
    margin-bottom: 5px;
}

ol {
    list-style-type: decimal;
}

hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 18px 0;
}

/* Tabelas */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0 18px 0;
    font-size: 9pt;
    page-break-inside: avoid;
}

th, td {
    border: 1px solid #cbd5e1;
    padding: 7px 10px;
    text-align: left;
    vertical-align: top;
}

th {
    background-color: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
}

tr:nth-child(even) td {
    background-color: #f8fafc;
}

/* Código e Caixas de Lousa */
pre {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-left: 4px solid #3b82f6;
    border-radius: 4px;
    padding: 10px 14px;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 8.5pt;
    line-height: 1.45;
    page-break-inside: avoid;
    white-space: pre-wrap;
    word-break: break-word;
    margin: 10px 0 14px 0;
}

code {
    font-family: 'Consolas', 'Courier New', monospace;
    background-color: #f1f5f9;
    padding: 1.5px 4.5px;
    border-radius: 3px;
    font-size: 9pt;
    color: #0f172a;
}

pre code {
    background-color: transparent;
    padding: 0;
    font-size: inherit;
    color: inherit;
}

/* MathML nativo estático */
math {
    font-family: 'Cambria Math', 'Latin Modern Math', 'STIX Two Math', serif;
    font-size: 1.05em;
    font-style: normal;
}

math[display="block"] {
    display: block;
    margin: 12px 0;
    text-align: center;
}

/* Callouts / Alertas */
.alert-box {
    padding: 10px 14px;
    margin: 12px 0;
    border-radius: 0 5px 5px 0;
    page-break-inside: avoid;
}

.alert-box p {
    margin: 4px 0;
    text-align: left;
}

.alert-note {
    background-color: #eff6ff;
    border-left: 4px solid #3b82f6;
    color: #1e3a8a;
}

.alert-tip {
    background-color: #f0fdf4;
    border-left: 4px solid #16a34a;
    color: #14532d;
}

.alert-important {
    background-color: #fef2f2;
    border-left: 4px solid #dc2626;
    color: #7f1d1d;
}

.alert-warning {
    background-color: #fffbeb;
    border-left: 4px solid #d97706;
    color: #78350f;
}

blockquote {
    background-color: #f8fafc;
    border-left: 4px solid #94a3b8;
    margin: 10px 0 14px 0;
    padding: 8px 14px;
    border-radius: 0 4px 4px 0;
    color: #334155;
    page-break-inside: avoid;
}

blockquote p {
    margin: 4px 0;
    text-align: left;
}

/* Questões no corpo do documento */
.question-block {
    page-break-inside: avoid;
    margin: 14px 0 20px 0;
    padding: 12px 14px;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
}

.question-block h3 {
    margin-top: 0;
    color: #0f172a;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
}

.gabarito-aviso {
    background-color: #f1f5f9;
    border: 1px dashed #94a3b8;
    color: #475569;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 8.5pt;
    margin-top: 10px;
    display: inline-block;
}

/* Seção de Gabarito no Final */
.page-break {
    page-break-before: always;
    break-before: page;
}

.gabarito-main-title {
    font-size: 16pt;
    color: #0f172a;
    border-bottom: 2.5px solid #0284c7;
    padding-bottom: 6px;
    margin-top: 0;
    margin-bottom: 18px;
}

.gabarito-sub-title {
    font-size: 12pt;
    color: #0369a1;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #bae6fd;
    padding-bottom: 4px;
    page-break-after: avoid;
}

.gabarito-card {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-left: 4.5px solid #0284c7;
    padding: 12px 16px;
    margin-bottom: 16px;
    border-radius: 0 6px 6px 0;
    page-break-inside: avoid;
}

.gabarito-card h3 {
    margin-top: 0;
    color: #0369a1;
    font-size: 10.5pt;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
    margin-bottom: 8px;
}

.gabarito-card p {
    margin: 5px 0 8px 0;
    text-align: left;
}

.gabarito-card ul {
    margin: 6px 0 8px 0;
}
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>{title}</title>
<style>
{styles}
</style>
</head>
<body>
{body}
</body>
</html>
"""


def convert_math_to_mathml(text):
    """Converte $ e $$ para MathML puro nativo usando latex2mathml."""
    def repl_disp(m):
        raw = m.group(1).strip()
        try:
            return "\n\n" + latex2mathml.converter.convert(raw, display='block') + "\n\n"
        except Exception:
            return f"\n\n$${raw}$$\n\n"
            
    def repl_inline(m):
        raw = m.group(1).strip()
        try:
            return latex2mathml.converter.convert(raw, display='inline')
        except Exception:
            return f"${raw}$"
            
    text = re.sub(r'\$\$([\s\S]+?)\$\$', repl_disp, text)
    text = re.sub(r'\$([^\$\n]+?)\$', repl_inline, text)
    return text


def md_to_html(md_text):
    """Renderiza markdown em HTML preservando negritos, tabelas e listas."""
    md_with_math = convert_math_to_mathml(md_text)
    
    html = markdown.markdown(
        md_with_math,
        extensions=['extra', 'tables', 'fenced_code', 'sane_lists']
    )
    
    def alert_replacer(m):
        full = m.group(0)
        m_type = re.search(r'\[!(NOTE|TIP|IMPORTANT|WARNING)\]', full)
        if not m_type:
            return full
        alert_type = m_type.group(1).upper()
        
        clean_content = re.sub(r'\[!(NOTE|TIP|IMPORTANT|WARNING)\](?:<br\s*/?>)?\s*', '', full)
        clean_content = re.sub(r'^<blockquote>\s*', '', clean_content)
        clean_content = re.sub(r'\s*</blockquote>$', '', clean_content)
        
        type_map = {
            'NOTE': ('alert-note', '📌 Nota / Observação:'),
            'TIP': ('alert-tip', '💡 Dica / Síntese:'),
            'IMPORTANT': ('alert-important', '⚠️ Ponto Crítico / Importante:'),
            'WARNING': ('alert-warning', '🚨 Cuidado / Atenção:')
        }
        cls, badge = type_map.get(alert_type, ('alert-note', '📌 Nota:'))
        return f'<div class="alert-box {cls}"><p><strong>{badge}</strong></p>{clean_content}</div>'

    html = re.sub(r'<blockquote>[\s\S]*?\[!(NOTE|TIP|IMPORTANT|WARNING)\][\s\S]*?</blockquote>', alert_replacer, html)
    return html


def build_gabarito_card_html(title, answer_md):
    """Renderiza um card de gabarito com HTML formatado (negrito, listas e parágrafos)."""
    ans_html = md_to_html(answer_md)
    return f"""
<div class="gabarito-card">
    <h3>{title}</h3>
    {ans_html}
</div>
"""


def process_file_portugues(raw_text):
    gabaritos = []
    
    def repl(m):
        q_title = m.group(1).strip()
        q_body = m.group(2).strip()
        details = m.group(3)
        
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        
        gabaritos.append((q_title, ans))
        
        q_html = md_to_html(f"### {q_title}\n\n{q_body}")
        return f'\n\n<div class="question-block">\n{q_html}\n<div class="gabarito-aviso">🔍 <em>Gabarito comentado e análise completa no final da apostila</em></div>\n</div>\n\n'
        
    pattern = r'###\s+(Quest[ãa]o\s+\d+[\s\S]*?)([\r\n]+[\s\S]*?)(<details>[\s\S]*?</details>)'
    body_md = re.sub(pattern, repl, raw_text)
    
    body_html = md_to_html(body_md)
    
    gabarito_html = '<div class="page-break"></div>\n<h1 class="gabarito-main-title">🔑 Gabarito Oficial Comentado e Análise das Questões</h1>\n'
    for title, ans_md in gabaritos:
        gabarito_html += build_gabarito_card_html(title, ans_md)
        
    return body_html + gabarito_html


def process_file_conhecimentos_gerais(raw_text):
    gabaritos = []
    
    def repl(m):
        q_title = m.group(1).strip()
        q_body = m.group(2).strip()
        details = m.group(3)
        
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        
        gabaritos.append((q_title, ans))
        
        q_html = md_to_html(f"### {q_title}\n\n{q_body}")
        return f'\n\n<div class="question-block">\n{q_html}\n<div class="gabarito-aviso">🔍 <em>Gabarito oficial e justificativa histórica no final da apostila</em></div>\n</div>\n\n'
        
    pattern = r'###\s+(Quest[ãa]o\s+\d+[\s\S]*?)([\r\n]+[\s\S]*?)(<details>[\s\S]*?</details>)'
    body_md = re.sub(pattern, repl, raw_text)
    
    body_html = md_to_html(body_md)
    
    gabarito_html = '<div class="page-break"></div>\n<h1 class="gabarito-main-title">🔑 Gabarito Oficial e Justificativas das Questões de Taubaté</h1>\n'
    for title, ans_md in gabaritos:
        gabarito_html += build_gabarito_card_html(title, ans_md)
        
    return body_html + gabarito_html


def process_file_conhecimentos_especificos(raw_text):
    gabaritos = []
    
    def repl(m):
        q_title = m.group(1).strip()
        q_body = m.group(2).strip()
        details = m.group(3)
        
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        
        gabaritos.append((q_title, ans))
        
        q_html = md_to_html(f"### {q_title}\n\n{q_body}")
        return f'\n\n<div class="question-block">\n{q_html}\n<div class="gabarito-aviso">🔍 <em>Gabarito com fundamentação nos artigos da LOM no final da apostila</em></div>\n</div>\n\n'
        
    pattern = r'###\s+(Quest[ãa]o\s+\d+[\s\S]*?)([\r\n]+[\s\S]*?)(<details>[\s\S]*?</details>)'
    body_md = re.sub(pattern, repl, raw_text)
    
    body_html = md_to_html(body_md)
    
    gabarito_html = '<div class="page-break"></div>\n<h1 class="gabarito-main-title">🔑 Gabarito Comentado e Fundamentação na Lei Orgânica (LOM)</h1>\n'
    for title, ans_md in gabaritos:
        gabarito_html += build_gabarito_card_html(title, ans_md)
        
    return body_html + gabarito_html


def process_file_matematica(raw_text):
    treinos = []
    questoes = []
    teoricos = []
    
    def treino_repl(m):
        title = m.group(1).strip()
        body = m.group(2).strip()
        details = m.group(3)
        
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        treinos.append((title, ans))
        
        q_html = md_to_html(f"### {title}\n\n{body}")
        return f'\n\n<div class="question-block">\n{q_html}\n<div class="gabarito-aviso">🔍 <em>Resolução passo a passo na seção final de Gabarito</em></div>\n</div>\n\n'
        
    pattern_treino = r'###\s+(Treino\s+\d+[\s\S]*?)([\r\n]+[\s\S]*?)(<details>[\s\S]*?</details>)'
    raw_text = re.sub(pattern_treino, treino_repl, raw_text)
    
    def questao_repl(m):
        title = m.group(1).strip()
        body = m.group(2).strip()
        details = m.group(3)
        
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        questoes.append((title, ans))
        
        q_html = md_to_html(f"### {title}\n\n{body}")
        return f'\n\n<div class="question-block">\n{q_html}\n<div class="gabarito-aviso">🔍 <em>Gabarito oficial e resolução comentada na seção final de Gabarito</em></div>\n</div>\n\n'
        
    pattern_questao = r'###\s+(Quest[ãa]o\s+\d+[\s\S]*?)([\r\n]+[\s\S]*?)(<details>[\s\S]*?</details>)'
    raw_text = re.sub(pattern_questao, questao_repl, raw_text)
    
    qc_count = [0]
    def qc_repl(m):
        qc_count[0] += 1
        num = qc_count[0]
        details = m.group(0)
        ans = re.sub(r'<summary>[\s\S]*?</summary>', '', details)
        ans = ans.replace('<details>', '').replace('</details>', '').strip()
        teoricos.append((f"Desafio Teórico {num}", ans))
        return f'\n\n<div class="gabarito-aviso">👉 <em>Resposta e conferência no Gabarito final (Desafio Teórico {num})</em></div>\n\n'
        
    raw_text = re.sub(r'<details>[\s\S]*?</details>', qc_repl, raw_text)
    
    body_html = md_to_html(raw_text)
    
    gabarito_html = '<div class="page-break"></div>\n<h1 class="gabarito-main-title">🔑 Gabarito Oficial Comentado e Resoluções Passo a Passo</h1>\n'
    
    if treinos:
        gabarito_html += '<h2 class="gabarito-sub-title">1. Resoluções do Laboratório de Treino Prático</h2>\n'
        for title, ans in treinos:
            gabarito_html += build_gabarito_card_html(title, ans)
            
    if questoes:
        gabarito_html += '<h2 class="gabarito-sub-title">2. Gabarito Oficial da Bateria de Questões de Concursos</h2>\n'
        for title, ans in questoes:
            gabarito_html += build_gabarito_card_html(title, ans)
            
    if teoricos:
        gabarito_html += '<h2 class="gabarito-sub-title">3. Respostas das Pausas Rápidas de Teoria</h2>\n'
        for title, ans in teoricos:
            gabarito_html += build_gabarito_card_html(title, ans)
            
    return body_html + gabarito_html


def process_file_exercicios_fracoes(raw_text):
    m = re.search(r'(## 🔑 Gabarito Comentado e Passo a Passo[\s\S]*?<details>[\s\S]*?</details>)', raw_text)
    if m:
        gab_full = m.group(1)
        inner = re.sub(r'## 🔑 Gabarito Comentado e Passo a Passo[\s\S]*?<summary>[\s\S]*?</summary>', '', gab_full)
        inner = inner.replace('<details>', '').replace('</details>', '').strip()
        
        content_without_gab = raw_text.replace(gab_full, '')
        
        aviso = '\n\n<div class="gabarito-aviso">👉 <em>O gabarito completo com a resolução passo a passo dos 43 exercícios encontra-se ao final deste caderno.</em></div>\n\n'
        
        body_html = md_to_html(content_without_gab + aviso)
        
        gabarito_html = '<div class="page-break"></div>\n<h1 class="gabarito-main-title">🔑 Gabarito Oficial e Resoluções Detalhadas (Exercícios 1 a 43)</h1>\n'
        gabarito_html += build_gabarito_card_html("Caderno Completo de Resoluções (Questões 1 a 43)", inner)
        
        return body_html + gabarito_html
    else:
        return md_to_html(raw_text)


def convert_document(md_path, pdf_filename, process_fn):
    print(f"Convertendo: {md_path} -> {pdf_filename}...")
    with open(md_path, 'r', encoding='utf-8') as f:
        raw_text = f.read()
        
    title = raw_text.split('\n')[0].replace('#', '').strip()
    
    body_html = process_fn(raw_text)
    full_html = HTML_TEMPLATE.format(title=title, styles=CSS_STYLES, body=body_html)
    
    temp_html = os.path.join(OUTPUT_DIR, f"temp_{pdf_filename}.html")
    pdf_out = os.path.join(OUTPUT_DIR, pdf_filename)
    
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(full_html)
        
    cmd = [
        CHROME_PATH,
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        f'--print-to-pdf={pdf_out}',
        '--no-pdf-header-footer',
        temp_html
    ]
    subprocess.run(cmd, check=True)
    
    if os.path.exists(temp_html):
        os.remove(temp_html)
        
    reader = pypdf.PdfReader(pdf_out)
    size_kb = os.path.getsize(pdf_out) / 1024
    print(f"  OK: {pdf_filename} ({len(reader.pages)} páginas, {size_kb:.1f} KB)")


if __name__ == "__main__":
    files = [
        ("semana-01/portugues_semana_01.md", "portugues_semana_01.pdf", process_file_portugues),
        ("semana-01/conhecimentos_gerais_semana_01.md", "conhecimentos_gerais_semana_01.pdf", process_file_conhecimentos_gerais),
        ("semana-01/conhecimentos_especificos_semana_01.md", "conhecimentos_especificos_semana_01.pdf", process_file_conhecimentos_especificos),
        ("semana-01/matematica_semana_01.md", "matematica_semana_01.pdf", process_file_matematica),
        ("semana-01/exercicios_fracoes_decimais_dizimas.md", "exercicios_fracoes_decimais_dizimas.pdf", process_file_exercicios_fracoes),
        ("semana-01/exercicios_potencias_raizes_expressoes.md", "exercicios_potencias_raizes_expressoes.pdf", process_file_exercicios_fracoes),
    ]
    
    for md_path, pdf_name, fn in files:
        if os.path.exists(md_path):
            convert_document(md_path, pdf_name, fn)
        else:
            print(f"Não encontrado: {md_path}")
            
    print("\nTodos os PDFs da Semana 01 foram atualizados com sucesso!")
