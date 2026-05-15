# 👟 Townhouse Shoes Laundry — Website

Website resmi **Townhouse Shoes Laundry** — jasa pencucian dan perawatan sepatu profesional di Arcamanik, Sindanglaya, Bandung.

---

## 📁 Struktur File

```
project-1/
├── index.html      # File utama website (SEMUA konten ada di sini)
├── style.css       # File styling (warna, ukuran, tata letak)
├── script.js       # File JavaScript (animasi, interaksi)
├── images/         # Folder untuk foto galeri
└── README.md       # Panduan ini
```

---

## ✏️ Cara Mengubah Teks / Harga

> **Tidak perlu skill coding!** Cukup buka `index.html` dengan Notepad.

1. Klik kanan file **`index.html`**
2. Pilih **Open with → Notepad** (atau Wordpad)
3. Cari teks yang ingin diubah (misal: "Rp35.000")
4. Ketik teks baru
5. Klik **File → Save** (atau tekan `Ctrl + S`)
6. Buka kembali `index.html` di browser untuk melihat hasilnya

### Yang sering diubah:

| Yang ingin diubah | Cari teks ini di `index.html` |
|------------------|-------------------------------|
| Harga | `Rp35.000`, `Rp50.000`, `Rp25.000`, dll |
| Nama usaha | `Townhouse Shoes Laundry` |
| Tagline | `Ga Try, You Cry` |
| Alamat | `Jl. Arcamanik, Sindanglaya` |
| No. WhatsApp | `087828258491` atau `6287828258491` |
| Jam operasional | `09.00 – 18.00` |
| Deskripsi layanan | teks di sebelah harga |

---

## 🖼️ Cara Mengganti Foto Galeri

1. Siapkan foto hasil kerja Anda (format **.jpg** atau **.png**)
2. Pindahkan foto ke folder **`images/`**
3. Buka `index.html` dengan Notepad
4. Cari kode seperti ini:

```html
<img src="https://picsum.photos/seed/shoe1/400/300" ... />
```

5. Ganti `https://picsum.photos/...` dengan `images/nama-foto-anda.jpg`

   **Contoh:**
   ```html
   <!-- Sebelum -->
   <img src="https://picsum.photos/seed/shoe1/400/300" alt="..." />

   <!-- Sesudah (jika fotonya bernama hasil1.jpg) -->
   <img src="images/hasil1.jpg" alt="Hasil laundry sepatu 1" />
   ```

6. Simpan file (`Ctrl + S`)
7. Refresh halaman website di browser

> 💡 **Tips:** Gunakan foto before/after agar lebih menarik!

---

## 🌐 Cara Deploy ke GitHub Pages (GRATIS)

Dengan GitHub Pages, website Anda bisa diakses online gratis 24 jam.

### Langkah-langkah:

#### 1. Buat Akun GitHub (jika belum punya)
- Buka https://github.com
- Klik **Sign up**
- Masukkan email, password, username
- Verifikasi email

#### 2. Buat Repository Baru
- Login ke GitHub
- Klik tombol **+** (pojok kanan atas) → **New repository**
- Isi **Repository name**: `townhouse-shoes-laundry`
- Pastikan **Public** dipilih
- Klik **Create repository**

#### 3. Upload File Website
- Di halaman repository, klik **uploading an existing file**
- Drag & drop semua file ini ke halaman GitHub:
  - `index.html`
  - `style.css`
  - `script.js`
  - Folder `images/` (jika sudah ada foto)
- Scroll ke bawah, klik **Commit changes**

#### 4. Aktifkan GitHub Pages
- Di repository, klik tab **Settings**
- Klik menu **Pages** (di sidebar kiri)
- Pada **Branch**, pilih **main** → **/(root)** → klik **Save**
- Tunggu 1-2 menit
- Website Anda akan muncul di:
  `https://[username].github.io/townhouse-shoes-laundry/`

> ⏳ **Catatan:** Perubahan bisa butuh beberapa menit hingga muncul. Refresh halaman jika perlu.

---

## 🔧 Ingin Tambah / Ubah Fitur?

Jika Anda ingin menambah atau mengubah fitur di website, silakan hubungi saya lagi dan jelaskan apa yang ingin diubah. Saya akan bantu update filenya.

---

## 📞 Kontak

**Townhouse Shoes Laundry**  
📍 Jl. Arcamanik, Sindanglaya, Bandung  
📱 0878-2825-8491 (WhatsApp)
