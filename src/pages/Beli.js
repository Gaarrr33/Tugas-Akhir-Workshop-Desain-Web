import React from "react";

function Beli () {
  return (
   <body>  
  <header class="bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="fw-bold">Beli Apartemen</h1>
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
          <img src="https://esjqwp2w2zz.exactdn.com/wp-content/uploads/2023/03/hipwee-84ca642f-b1c7-4af9-8da6-2eff0e29549f-750x422-1.jpg" class="card-img-top" alt="Apartemen 2"></img>
          <div class="card-body">
            <h5 class="card-title">Ocean View Apartment</h5>
            <p class="card-text">Bali • Rp 5 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://arsitag.b-cdn.net/wp-content/uploads/2022/11/background-apartemen.jpeg" class="card-img-top" alt="Apartemen 3"></img>
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
          <img src="https://furnizing.com/assets/files/img/2601009f96d9d1b945b8e684ba2921fa.jpg" class="card-img-top" alt="Apartemen 5"></img>
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
            <p class="card-text">Jakarta • Rp 7 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://img.lovepik.com/bg/20240421/Modern-Open-Space-Bedrooms-and-Bathrooms-Explore-a-Stunning-Contemporary_7104069_wh300.jpg" class="card-img-top" alt="Apartemen 7"></img>
          <div class="card-body">
            <h5 class="card-title">The Peak Apartment </h5>
            <p class="card-text">Semarang • Rp 6 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://png.pngtree.com/background/20240413/original/pngtree-contemporary-marble-and-grey-interior-design-for-living-and-dining-spaces-picture-image_8472383.jpg" class="card-img-top" alt="Apartemen 8"></img>
          <div class="card-body">
            <h5 class="card-title">Praxis Apartment</h5>
            <p class="card-text">Surabaya • Rp 12 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-small-apartment-home-interior-decoration-style-photography-map-with-map-image_794336.jpg" class="card-img-top" alt="Apartemen 9"></img>
          <div class="card-body">
            <h5 class="card-title">Linden Apartment</h5>
            <p class="card-text">Surabaya • Rp 8 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2VkdW5nJTIwYXBhcnRlbWVufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" class="card-img-top" alt="Apartemen 10"></img>
          <div class="card-body">
            <h5 class="card-title">The Via and The Vue Apartment</h5>
            <p class="card-text">Semarang • Rp 11 Juta / Bulan</p>
            <a href="#" class="btn btn-outline-primary w-100">Detail</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary text-white text-center py-5">
    <div class="container">
      <h2 class="fw-bold">Ingin Menjual Apartemen Anda?</h2>
      <p class="lead">Daftarkan properti Anda di LuxApart dan temukan penyewa potensial dengan cepat.</p>
      <a href="/jual" class="btn btn-light btn-lg mt-2"><i class="bi bi-upload"></i> Daftarkan Sekarang</a>
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

export default Beli;
