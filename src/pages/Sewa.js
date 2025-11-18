import React from "react";

function Sewa() {
  return (
  <body>  
  <header class="bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="fw-bold">Sewa Apartemen</h1>
      <p class="lead">Temukan apartemen terbaik untuk disewa dengan mudah dan cepat.</p>
    </div>
  </header>

  
  <section class="bg-light py-4">
    <div class="container">
      <div class="row g-3 align-items-center">
        <div class="col-md-3">
          <input type="text" class="form-control" placeholder="Kota / Lokasi"></input>
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected>Durasi Sewa</option>
            <option>Harian</option>
            <option>Bulanan</option>
            <option>Tahunan</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected>Kisaran Harga</option>
            <option> Rp 5 Juta</option>
            <option>Rp 5 - 10 Juta</option>
            <option> Rp 10 Juta</option>
          </select>
        </div>
        <div class="col-md-3 text-end">
          <button class="btn btn-primary w-100"><i class="bi bi-search"></i> Cari</button>
        </div>
      </div>
    </div>
  </section>
  <section class="container py-5">
    <h2 class="text-center mb-4">Daftar Apartemen Tersedia</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" class="card-img-top" alt="Apartemen 1"></img>
          <div class="card-body">
            <h5 class="card-title">Skyline Residence</h5>
            <p class="card-text">Jakarta Selatan • Rp 8 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaD1eIaKxhxhqEz_GZk5sBlsfkn4d-4k8rA&s" class="card-img-top" alt="Apartemen 2"></img>
          <div class="card-body">
            <h5 class="card-title">Ocean View Apartment</h5>
            <p class="card-text">Bali • Rp 5 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASyM1-yjmuy3jbJLPMxY7TgGTp648rKrAUgbCgnhcfKe0Vhn1dLSVwgW9Y--w_ce-fcw&usqp=CAU" class="card-img-top" alt="Apartemen 3"></img>
          <div class="card-body">
            <h5 class="card-title">Green Garden Tower</h5>
            <p class="card-text">Surabaya • Rp 6,5 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" class="card-img-top" alt="Apartemen 4"></img>
          <div class="card-body">
            <h5 class="card-title">Central Park Apartment</h5>
            <p class="card-text">Bandung • Rp 4,5 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://www.hplpelangi.com/wp-content/uploads/2022/08/desain-apartemen-studio.webp" class="card-img-top" alt="Apartemen 5"></img>
          <div class="card-body">
            <h5 class="card-title">Royal City Suites</h5>
            <p class="card-text">Yogyakarta • Rp 7 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" class="card-img-top" alt="Apartemen 6"></img>
          <div class="card-body">
            <h5 class="card-title">Sunset Residences</h5>
            <p class="card-text">Semarang • Rp 6 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary text-white text-center py-5">
    <div class="container">
      <h2 class="fw-bold">Ingin Menjual Apartemen Anda?</h2>
      <p class="lead">Daftarkan properti Anda di LuxApart dan temukan pembeli potensial dengan cepat.</p>
      <a href="jual" class="btn btn-light btn-lg mt-2"><i class="bi bi-upload"></i> Daftarkan Sekarang</a>
    </div>
  </section>
  <footer class="bg-dark text-light pt-5 pb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5>LuxApart</h5>
          <p>Platform terpercaya untuk sewa, jual, dan beli apartemen dengan mudah, aman, dan cepat di seluruh Indonesia.</p>
        </div>
        
        <div class="col-md-4 mb-3">
          <h5>Kontak</h5>
          <p><i class="bi bi-geo-alt"></i> Surabaya, Indonesia</p>
          <p><i class="bi bi-envelope"></i> support@luxapart.com</p>
          <p><i class="bi bi-telephone"></i> +62 812 3456 7890</p>
        </div>
      </div>
      <div class="text-center border-top border-secondary pt-3">
        <p class="mb-0">&copy; 2025 LuxApart. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

  
  );
}

export default Sewa;
