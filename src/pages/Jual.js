import React from "react";
function Jual () {
 return(
<body>

<div id="headerCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">

        <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" class="d-block w-100" height="500"></img>
            <div class="carousel-caption">
                <h3 class="fw-bold">Sell Your Luxury Apartment</h3>
                <p>Make your listing shine and attract buyers instantly.</p>
            </div>
        </div>

        <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" class="d-block w-100" height="500" ></img>
            <div class="carousel-caption">
                <h3 class="fw-bold">Reach Thousands of Buyers</h3>
                <p>Upload your apartment easily and get listed in seconds.</p>
            </div>
        </div>

    </div>

    <button class="carousel-control-prev" data-bs-target="#headerCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" data-bs-target="#headerCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>

<div class="container my-5 text-center">
    <h2 class="fw-bold">Form Penjualan Apartemen</h2>
    <p>Isi semua data di bawah untuk mulai menjual apartemen Anda.</p>
</div>

<div class="container mb-3">
    <div class="alert alert-success d-none" id="successAlert">
        <i class="bi bi-check-circle"></i> Apartemen berhasil ditambahkan!
    </div>
</div>

<div class="container mb-5">

    <div class="accordion" id="formAccordion">

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#dataApt">
                    <i class="bi bi-info-circle me-2"></i> Data Apartemen
                </button>
            </h2>

            <div id="dataApt" class="accordion-collapse collapse show">
                <div class="accordion-body">

                    <form id="apartmentForm" enctype="multipart/form-data">
                      
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nama Apartemen</label>
                            <input type="text" class="form-control" id="namaApt" required placeholder="Contoh: Sky Residence Tower B"></input>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label fw-bold">Harga</label>
                            <div class="input-group">
                                <span class="input-group-text">Rp</span>
                                <input type="number" class="form-control" id="hargaApt" required></input>
                            </div>
                        </div>
                      
                        <div class="mb-3">
                            <label class="form-label fw-bold">Deskripsi</label>
                            <textarea class="form-control" id="deskripsiApt" rows="4" required></textarea>
                        </div>
                      
                        <div class="mb-3">
                            <label class="form-label fw-bold">Fasilitas</label>
                            <select class="form-select" id="fasilitasApt" multiple required>
                                <option value="Kolam Renang">Kolam Renang</option>
                                <option value="Gym">Gym</option>
                                <option value="Parkiran Luas">Parkiran Luas</option>
                                <option value="Keamanan 24 Jam">Keamanan 24 Jam</option>
                                <option value="Lift Modern">Lift Modern</option>
                                <option value="AC">AC</option>
                            </select>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label fw-bold">Upload Gambar</label>
                            <input type="file" class="form-control" id="gambarApt" accept="image/*" required></input>

                            <button type="button" class="btn btn-link mt-2" data-bs-toggle="modal" data-bs-target="#previewModal">
                                <i class="bi bi-eye"></i> Preview Gambar
                            </button>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100 fw-bold mt-3">
                            <i class="bi bi-upload"></i> Tambahkan Apartemen
                        </button>

                    </form>

                </div>
            </div>
        </div>

    </div>
</div>

<div class="modal fade" id="previewModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Preview Gambar Apartemen</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body text-center">
                <img id="previewImg" class="img-fluid rounded" alt="Preview Akan Muncul Di Sini"></img>
            </div>

        </div>
    </div>
</div>

<footer class="bg-dark text-white text-center py-3 mt-5">
    <p class="mb-0">© 2025 ApartEase — Sell Your Apartment Easily</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>


</body>

);
}

export default Jual;
