import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <ul class="navigation">
            <li><Link to="/">Home</Link></li>
            <li>Search bar</li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
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