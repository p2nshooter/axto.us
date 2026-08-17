# DPS Desa Sukakarya — Pilkades 2026

Daftar Pemilih Sementara (DPS) Desa Sukakarya, Kecamatan Sukakarya, Kabupaten Bekasi,
untuk Pemilihan Kepala Desa Tahun 2026. Disusun ulang dari berkas coklit
`Bagi_A._Daftar_Pemilih_DPSHP.xlsx` agar siap cetak: dilengkapi halaman sampul,
kop/judul resmi, dan dipisah per TPS.

## Isi

| Berkas | Keterangan |
|---|---|
| `DPS_Desa_Sukakarya_2026_per_TPS.xlsx` | Buku kerja lengkap: COVER, REKAPITULASI, TPS 01–11, CATATAN VERIFIKASI, dan lembar sumber `Olah Data` |
| `pdf-per-tps/DPS_TPS_01.pdf` … `DPS_TPS_11.pdf` | Satu PDF siap cetak per TPS (sampul + daftar pemilih) |
| `skrip/build_dps.py` | Pembangun buku kerja XLSX |
| `skrip/build_pdf.py` | Pembangun PDF per TPS |

## Jumlah pemilih

Total **4.620 pemilih** — 2.327 laki-laki, 2.293 perempuan.

| TPS | L | P | Jumlah | TPS | L | P | Jumlah |
|---|---|---|---|---|---|---|---|
| 01 | 183 | 170 | 353 | 07 | 226 | 216 | 442 |
| 02 | 173 | 146 | 319 | 08 | 225 | 212 | 437 |
| 03 | 169 | 190 | 359 | 09 | 230 | 231 | 461 |
| 04 | 220 | 216 | 436 | 10 | 228 | 218 | 446 |
| 05 | 223 | 230 | 453 | 11 | 217 | 207 | 424 |
| 06 | 233 | 257 | 490 | | | | |

## Kolom daftar pemilih

`NO · NOMOR KARTU KELUARGA · NIK · NAMA LENGKAP · TEMPAT LAHIR · TANGGAL LAHIR ·
STATUS PERKAWINAN (B/S/P) · JENIS KELAMIN (L/P) · JALAN/DUKUH · RT · RW · KETERANGAN`

Kode: `B` Belum Kawin, `S` Sudah Kawin, `P` Pernah Kawin · `L` Laki-laki, `P` Perempuan ·
Keterangan diisi jenis disabilitas (Fisik, Intelektual, Mental, Tuna Wicara, Tuna Rungu,
Tuna Netra) sesuai legenda berkas asli.

## Perbaikan yang diterapkan

1. Ditambahkan halaman COVER dan kop/judul resmi pada setiap lembar.
2. Data dipisah menjadi satu lembar kerja per TPS (TPS 01 s.d. TPS 11).
3. Nomor urut pemilih dihitung ulang mulai dari 1 pada masing-masing TPS.
4. **Rumus `DATEDIF` pada lembar sumber diperbaiki.** Berkas asli memakai
   `=DATEDIF(F3,"21/09/2026","Y")` — tanggal ditulis sebagai teks, sehingga seluruh
   13.860 sel kolom Tahun/Bulan/Hari berisi `#VALUE!` (nilai galat itu memang sudah
   tersimpan di berkas asli). Diganti menjadi `DATE(2026,9,21)` sehingga usia terhitung.
5. Spasi berlebih pada kolom alamat dirapikan (mis. `KP. KUDA-KUDA ` → `KP. KUDA-KUDA`).
6. Penulisan kolom E-KTP diseragamkan menjadi huruf kapital.
7. NKK dan NIK diformat sebagai teks agar tidak berubah menjadi notasi ilmiah.
8. Tanggal lahir diseragamkan dengan format `DD-MM-YYYY`.
9. Pengaturan cetak: A4 landscape, judul berulang di tiap halaman, nomor halaman.
10. Lembar REKAPITULASI memakai rumus, sehingga ikut menyesuaikan bila data diedit.
11. Lembar sumber `Olah Data` tetap disertakan.

## Catatan verifikasi

Lembar **CATATAN VERIFIKASI** memuat temuan yang **tidak** diubah atau dihapus —
hanya ditandai agar Panitia menelusuri dan memutuskan sendiri statusnya:

- **3 pemilih berusia di bawah 17 tahun** pada hari pemungutan suara (21-09-2026).
  Memenuhi syarat hanya bila sudah/pernah kawin.
- **11 NIK ganda** (masing-masing tercatat 2 kali, total 22 baris).

## Membangun ulang

```bash
pip install openpyxl
python3 skrip/build_dps.py   # menghasilkan XLSX (butuh source.xlsx di folder yang sama)
python3 skrip/build_pdf.py   # menghasilkan PDF per TPS (butuh LibreOffice Calc)
```
