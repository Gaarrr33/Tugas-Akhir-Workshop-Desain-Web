# 🏠 ApartEase: Marketplace Properti Apartemen Indonesia

ApartEase adalah platform *web* modern yang dirancang untuk mempermudah proses jual beli dan sewa unit apartemen di seluruh Indonesia. Dibangun menggunakan **React** untuk pengalaman pengguna yang dinamis dan **Bootstrap** untuk desain yang *responsive* dan terstruktur.

---

## 🚀 Fitur Utama

* **Daftar Properti Komprehensif:** Menampilkan unit apartemen dengan detail lengkap, termasuk foto, spesifikasi, dan informasi kontak.
* **Pencarian & Filter Canggih:** Memungkinkan pengguna menyaring properti berdasarkan lokasi, harga, jumlah kamar tidur, dan jenis transaksi (Jual atau Sewa).
* **Desain Responsif:** Tampilan yang optimal dan mudah digunakan di berbagai perangkat (desktop, tablet, dan *mobile*) berkat kerangka kerja Bootstrap.

---

## ⚙️ Teknologi yang Digunakan

* **Frontend Framework:** React.js
* **Styling & UI Library:** Bootstrap 5
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Routing:** React Router DOM (untuk navigasi antar halaman)
* **Data Source:** *Mock Data* (JSON Array) - *Dapat dikembangkan menggunakan API di tahap selanjutnya.*

---

## 🗺️ Struktur Halaman

Website ini terdiri dari empat halaman utama yang diakses melalui navigasi:

1.  ### **Home (Beranda)**
    * **Fungsi:** Halaman *landing* utama. Menampilkan *hero image* yang menarik, ringkasan layanan, dan properti unggulan atau properti yang baru ditambahkan.
    * **Komponen Kunci:** **Carousel** (properti unggulan), **Jumbotron**, dan *Call-to-Action* (CTA) ke halaman Jual, Beli, atau Sewa.

2.  ### **Beli**
    * **Fungsi:** Menampilkan semua unit apartemen yang **dijual**.
    * **Komponen Kunci:** **Sidebar Filter** (harga, lokasi, tipe unit), **Grid System** untuk *listing* properti dalam bentuk **Card**, dan **Pagination**.

3.  ### **Sewa**
    * **Fungsi:** Menampilkan semua unit apartemen yang **disewakan** (per bulan/tahun).
    * **Komponen Kunci:** Mirip dengan halaman Beli, namun fokus pada properti dengan tipe transaksi Sewa. Memiliki filter harga sewa yang spesifik.

4.  ### **Detail Properti**
    * **Fungsi:** Halaman terpisah (menggunakan *dynamic routing* seperti `/properti/:id`) yang menampilkan spesifikasi lengkap dari satu unit properti.
    * **Komponen Kunci:** **Image Gallery/Carousel**, **List Group** (spesifikasi), **Contact Form** (untuk penjadwalan kunjungan).

---

## 🛠️ Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek ApartEase di lingkungan lokal Anda:

### Prasyarat

Pastikan Anda telah menginstal **Node.js** dan **npm** (atau **Yarn**).

### Instalasi

1.  **Kloning Repositori:**
    ```bash
    git clone [LINK_REPOSITORY_ANDA]
    cd ApartEase
    ```

2.  **Instal Dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Aplikasi:**
    ```bash
    npm start
    # atau
    yarn start
    ```

Aplikasi akan berjalan di mode pengembangan. Buka `http://localhost:3000` di *browser* Anda.

---

## ✍️ Kontributor

* **[Nama Anda]** - *[Peran Anda di Proyek/Inisiator]*
* *(Tambahkan nama kontributor lain jika ada)*

