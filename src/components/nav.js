import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <div class="container">

    <a class="navbar-brand fw-bold" href="#">
      ApartEase
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarMenu">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
        <li class="nav-item">
          <a class="nav-link" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/jual">Jual</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/beli">Beli</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sewa">Sewa</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

  );
}

export default Navbar;
