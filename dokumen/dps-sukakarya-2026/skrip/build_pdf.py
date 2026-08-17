#!/usr/bin/env python3
"""
Membuat berkas PDF Daftar Pemilih Sementara (DPS) -- satu berkas per TPS.

Setiap PDF berisi:
  halaman 1  : COVER (potret) dengan penanda nomor TPS
  halaman 2+ : Daftar pemilih TPS bersangkutan (lanskap A4),
               judul/kop berulang di setiap halaman.
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

import openpyxl

from build_dps import baca_sumber, buat_cover, buat_lembar_tps, kelompokkan

BASE = Path(__file__).resolve().parent
KERJA = BASE / "kerja_pdf"          # workbook antara (1 TPS per berkas)
KELUAR = BASE / "PDF_per_TPS"       # hasil akhir PDF
PROFIL = BASE / "lo_profile"
RECALC = "/root/.claude/skills/synced/xlsx/scripts/recalc.py"


def bikin_workbook_tps(tps, baris_data):
    """Workbook ringkas berisi COVER + satu lembar TPS."""
    wb = openpyxl.Workbook()
    wb.remove(wb.active)
    buat_cover(wb, {tps: baris_data}, tps=tps)
    buat_lembar_tps(wb, tps, baris_data)
    wb._sheets = [wb["COVER"], wb[f"TPS {tps:02d}"]]
    path = KERJA / f"DPS_TPS_{tps:02d}.xlsx"
    wb.save(path)
    return path


def recalc(path):
    r = subprocess.run(
        [sys.executable, RECALC, str(path), "120"],
        capture_output=True, text=True,
    )
    print(f"  recalc {path.name}: {r.stdout.strip().splitlines()[1:3]}")
    if '"status": "success"' not in r.stdout:
        raise SystemExit(f"recalc gagal untuk {path}:\n{r.stdout}\n{r.stderr}")


def ke_pdf(path):
    r = subprocess.run(
        [
            "soffice", "--headless", "--norestore", "--nolockcheck",
            f"-env:UserInstallation=file://{PROFIL}",
            "--convert-to", "pdf:calc_pdf_Export",
            "--outdir", str(KELUAR), str(path),
        ],
        capture_output=True, text=True, timeout=300,
    )
    pdf = KELUAR / (path.stem + ".pdf")
    if not pdf.exists():
        raise SystemExit(f"konversi PDF gagal: {path}\n{r.stdout}\n{r.stderr}")
    return pdf


def main():
    for d in (KERJA, KELUAR):
        shutil.rmtree(d, ignore_errors=True)
        d.mkdir(parents=True, exist_ok=True)

    data = baca_sumber()
    per_tps = kelompokkan(data)

    hasil = []
    for tps in sorted(per_tps):
        rows = per_tps[tps]
        print(f"TPS {tps:02d} ({len(rows)} pemilih)")
        xlsx = bikin_workbook_tps(tps, rows)
        recalc(xlsx)
        pdf = ke_pdf(xlsx)
        hasil.append((tps, len(rows), pdf))
        print(f"  -> {pdf.name} ({pdf.stat().st_size / 1024:.0f} KB)")

    print("\nSelesai:")
    for tps, n, pdf in hasil:
        print(f"  TPS {tps:02d}  {n:>4} pemilih  {pdf.name}")


if __name__ == "__main__":
    main()
