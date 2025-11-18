import React from "react";

function Home() {
  return (

<body>

<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <div class="text-center">
            <h1 class="fw-bold display-4">Find Your Dream Apartment</h1>
            <p class="lead">Sewa, beli, atau jual apartemen favorit Anda dengan mudah, cepat, dan aman.</p>

            <form class="d-flex justify-content-center mt-4">
                <input class="form-control w-50" type="search" placeholder="Search apartment..."></input>
                <button class="btn btn-primary ms-2">Search</button>
            </form>
        </div>
    </div>
</div>

<div id="heroCarousel" class="carousel slide container my-5" data-bs-ride="carousel">
    <div class="carousel-inner rounded">

        <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471" class="d-block w-100" height="500"></img>
        </div>

        <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1560448075-bb485b067938" class="d-block w-100" height="500"></img>
        </div>

        <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1586105251261-72a756497a12" class="d-block w-100" height="500"></img>
        </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>


<section class="container text-center my-5">
  <h2 class="fw-bold mb-4">Layanan Kami</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 p-3 shadow-sm border-0 hover-shadow">
        <div class="card-body">
          <h5 class="card-title fw-bold">Jual Apartemen</h5>
          <p class="card-text">Pasang listing apartemenmu dan temukan pembeli dengan cepat.</p>
          <a href="jual.html" class="btn btn-primary">Jual Sekarang</a>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 p-3 shadow-sm border-0 hover-shadow">
        <div class="card-body">
          <h5 class="card-title fw-bold">Beli Apartemen</h5>
          <p class="card-text">Ribuan apartemen eksklusif siap kamu pilih sesuai kebutuhan.</p>
          <a href="beli.html" class="btn btn-primary">Lihat Apartemen</a>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 p-3 shadow-sm border-0 hover-shadow">
        <div class="card-body">
          <h5 class="card-title fw-bold">Sewa Apartemen</h5>
          <p class="card-text">Sewa bulanan & tahunan dengan proses mudah dan cepat.</p>
          <a href="sewa.html" class="btn btn-primary">Sewa Sekarang</a>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="bg-light py-5">
  <div class="container">
    <h2 class="fw-bold text-center mb-4">Rekomendasi Apartemen</h2>

    <div id="rekomCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="https://pustaka.bca.co.id/rumahsaya/DEVELOPER/SUMMARECON/Apartemen%20The%20Springlake/Gallery/Image%20Project/1.jpg?v=638922195446667824" class="card-img-top"></img>
                <div class="card-body">
                  <h5>Green Lake Residence</h5>
                  <p>Rp 750.000.000</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" class="card-img-top"></img>
                <div class="card-body">
                  <h5>Sky Residence</h5>
                  <p>Rp 1.2 Miliar</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" class="card-img-top"></img>
                <div class="card-body">
                  <h5>Premium Tower</h5>
                  <p>Rp 950.000.000</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<section class="container text-center my-5">
  <h2 class="fw-bold mb-4">Apa Kata Mereka?</h2>

  <div id="testiCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">

      <div class="carousel-item active">
        <blockquote class="blockquote">
          <p>"Pelayanan sangat cepat dan apartemennya berkualitas premium!"</p>
          <footer class="blockquote-footer">Rina, Surabaya</footer>
        </blockquote>
      </div>

      <div class="carousel-item">
        <blockquote class="blockquote">
          <p>"Proses sewa sangat mudah, tinggal pilih dan langsung dihubungi."</p>
          <footer class="blockquote-footer">Dani, Jakarta</footer>
        </blockquote>
      </div>

    </div>
  </div>
</section>

<section class="bg-primary text-white text-center py-5">
  <h2 class="fw-bold">Siap menemukan apartemen impianmu?</h2>
  <p>Bergabung sekarang dan nikmati kemudahan mengelola hunian masa depan.</p>
  <a href="/beli" class="btn btn-light btn-lg">Mulai Sekarang</a>
</section>

<footer class="bg-dark text-white text-center py-3 mt-5">
    <div class="container">
        <p class="mb-0">© 2025 ApartEase — Rent • Buy • Sell</p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>



  );
}

export default Home;
