import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <ul class="navigation">
            <li><Link className="menu" to="/">Home</Link></li>
            <li><Search /></li>
            <li><Link className="menu" to="/cart">Cart</Link></li>
        </ul>
    );
}

function Search() {
    return (
        <form class="input-group search-form">
            <label class="input-group-text" for="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </label>
            <input type="search" class="form-control" id="search" />
          </form>
    );
}

function Header() {
    return (
        <header>
            <div class="logo-container">
                <Link class="logo" to="/">eCom.</Link>
            </div>
            <Nav />
        </header>
    )
}

function Footer() {
    return (
      <footer>
        <div>E-Com footer</div>
      </footer>
    );
}

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;