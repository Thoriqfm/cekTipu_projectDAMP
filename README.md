# CekTipu Architecture
 
Struktur project front end sederhana. Menggunakan HTML, CSS, dan JavaScript murni tanpa framework.
 
---

## Struktur Folder
 
```
cekTipu/
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── components/
│   └── navbar.html
│
├── js/
│   └── components.js
│
├── pages/
│   ├── dashboard/
│   │   ├── index.html
│   │   ├── dashboard.css
│   │   └── dashboard.js
│   │
│   ├── subscription/
│   │   ├── index.html
│   │   ├── subscription.css
│   │   └── subscription.js
│   │
│   ├── auth/
│   │   ├── signin/
│   │   │   ├── index.html
│   │   │   ├── signin.css
│   │   │   └── signin.js
│   │   └── signup/
│   │       ├── index.html
│   │       ├── signup.css
│   │       └── signup.js
│   │
│   ├── profile/
│   │   ├── index.html
│   │   ├── profile.css
│   │   └── profile.js
│   │
│   └── forum/
│       ├── index.html
│       ├── forum.css
│       └── forum.js
│
├── styles/
│   ├── tokens.css
│   └── typography.css
│
└── index.html
```
 
---

## Fungsi Tiap Folder & File
 
### `assets/`
Menyimpan semua file statis.
- `images/` — gambar, ilustrasi, icon
- `fonts/` — file font lokal

---

### `components/`
Berisi potongan HTML yang dipakai di lebih dari satu halaman. Tidak perlu tag `<html>`, `<head>`, atau `<body>` — langsung isinya saja.
- `navbar.html` — navigasi utama

---

### `js/`
Berisi JavaScript yang bersifat shared / dipakai semua halaman.
 
- `components.js` — loader untuk inject `navbar.html` ke setiap halaman secara otomatis via `fetch`
 
---

### `pages/`
Setiap subfolder adalah "wilayah" satu anggota tim. Bebas menambah file CSS atau JS tambahan di dalam foldernya sendiri.

Setiap folder berisi:
- `index.html` — struktur halaman
- `[nama].css` — styling spesifik halaman, boleh override tapi tetap pakai variabel dari `tokens.css`
- `[nama].js` — logic spesifik halaman

---

### `styles/`
Design system bersama. **Jangan diubah seenaknya** — diskusi dulu kalau mau diubah.
 
- `tokens.css` — sumber kebenaran design system: CSS variables untuk warna, font, spacing, border radius
- `typography.css` — aturan font-family, ukuran teks, line-height

---

### `index.html`
Halaman landing / root project. Titik masuk utama ketika pertama kali membuka project.
 
---

## Aturan Umum
 
1. **Selalu import shared styles** di setiap halaman dengan urutan: `tokens.css` → `typography.css` → CSS halaman sendiri
2. **Selalu load** `components.js` sebelum JS halaman sendiri
3. **Gunakan CSS variables** dari `tokens.css` saat styling, jangan hardcode nilai warna atau font
4. **Folder `styles/` dan `js/`** adalah shared — koordinasi ke tim sebelum mengubah
5. **Jalankan via Live Server** (VS Code extension) karena `components.js` menggunakan `fetch` yang tidak bisa jalan dari file lokal langsung
---

## Cara Import di Setiap Halaman
 
```html
<head>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
 
  <!-- Shared styles (path dari dalam pages/[nama]/) -->
  <link rel="stylesheet" href="../../styles/tokens.css">
  <link rel="stylesheet" href="../../styles/typography.css">
  <link rel="stylesheet" href="../../styles/components.css">
 
  <!-- CSS halaman ini -->
  <link rel="stylesheet" href="[nama].css">
</head>
 
<body>
  <div id="navbar"></div>
 
  <main>
    <!-- konten -->
  </main>
 
  <div id="footer"></div>
 
  <script src="../../js/utils.js"></script>
  <script>
    window.componentDepth = '../../';
  </script>
  <script src="../../js/components.js"></script>
  <script src="[nama].js"></script>
</body>
```
