import os
import json
import urllib.request
import re
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

# Output directory: prova-auto/provas-access
out_dir = os.path.join('prova-auto', 'provas-access')
os.makedirs(out_dir, exist_ok=True)

with open('.agents/access_complete_plan.json', 'r', encoding='utf-8') as f:
    matches = json.load(f)

# Filter out older ones if needed, keep CIDs from 2024 to 2026
# Let's inspect unique exams
# For Tipo 1, Tipo 2, Tipo 3, Tipo 4, we usually want Tipo 1 (or all if different shifts).
# Let's pick representative exams so Soares has a rich, clean collection!

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

manifest = []

def download_file(url, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        return True
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
            if len(data) > 1000 and data.startswith(b'%PDF'):
                with open(dest_path, 'wb') as f:
                    f.write(data)
                return True
            else:
                print(f'Warning: Not a valid PDF ({len(data)} bytes) from {url}')
                return False
    except Exception as e:
        print(f'Error downloading {url}: {e}')
        return False

# Group matches by CID + Cargo simplified
grouped = {}
for m in matches:
    cid = m['cid']
    title = m['prova_title']
    # If it has "TIPO 2", "TIPO 3", "TIPO 4", we prefer TIPO 1, but if only TIPO 1 or no Tipo, keep it
    if 'tipo 2' in title.lower() or 'tipo 3' in title.lower() or 'tipo 4' in title.lower():
        # check if Tipo 1 exists in the list for this cid
        has_tipo_1 = any(x['cid'] == cid and 'tipo 1' in x['prova_title'].lower() for x in matches)
        if has_tipo_1:
            continue # skip duplicate types to avoid redundant files with just shuffled questions
    
    key = f"{cid}_{title[:25]}"
    if key not in grouped:
        grouped[key] = m

unique_exams = list(grouped.values())
print(f'Starting download of {len(unique_exams)} distinct Access administrative exams...')

downloaded_count = 0

for i, exam in enumerate(unique_exams, 1):
    cid = exam['cid']
    concurso = exam['concurso']
    year = exam['year']
    p_title = exam['prova_title']
    p_url = exam['prova_url']
    g_title = exam['gab_title']
    g_url = exam['gab_url']
    
    # Clean filename
    safe_title = re.sub(r'[^a-zA-Z0-9_\-]', '_', p_title[:35]).strip('_')
    safe_concurso = re.sub(r'[^a-zA-Z0-9_\-]', '_', concurso[:25]).strip('_')
    
    prova_filename = f"access_{i:02d}_{safe_concurso}_{safe_title}.pdf"
    gab_filename = f"gabarito_{i:02d}_{safe_concurso}.pdf"
    
    prova_path = os.path.join(out_dir, prova_filename)
    gab_path = os.path.join(out_dir, gab_filename)
    
    print(f"[{i}/{len(unique_exams)}] Downloading {prova_filename}...")
    p_ok = download_file(p_url, prova_path)
    
    g_ok = False
    if g_url:
        g_ok = download_file(g_url, gab_path)
    
    if p_ok:
        downloaded_count += 1
        manifest.append({
            'num': i,
            'cid': cid,
            'ano': year,
            'orgao': concurso,
            'cargo': p_title,
            'arquivo_prova': prova_filename,
            'arquivo_gabarito': gab_filename if g_ok else 'Gabarito não disponível',
            'url_prova': p_url,
            'url_gabarito': g_url
        })
    time.sleep(0.5)

print(f'\nFinished downloading {downloaded_count} exams into {out_dir}.')

# Write index file in prova-auto/provas-access/indice_access.txt
idx_path = os.path.join(out_dir, 'indice_access.txt')
with open(idx_path, 'w', encoding='utf-8') as f:
    f.write("Nº | Ano | Órgão | Cargo | Arquivo Prova | Arquivo Gabarito\n")
    f.write("-" * 100 + "\n")
    for m in manifest:
        f.write(f"{m['num']:02d} | {m['ano']} | {m['orgao']} | {m['cargo']} | {m['arquivo_prova']} | {m['arquivo_gabarito']}\n")

print(f'Wrote index to {idx_path}')
