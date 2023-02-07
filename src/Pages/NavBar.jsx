import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            TAJ
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  About Us
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Users
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Address">
                      Address
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Accounts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Help
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-secondary" type="submit">
                Search
              </button>
              <div className='cart'>
                <Link className='view-cart' to="/Viewcart">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-64.png"
                  alt=""
                  className='cart'
                />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
