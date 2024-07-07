import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    );
}

function Header() {
    return (
        <header>
            <div>E-Com logo</div>
            <Nav />
        </header>
    )
}

function Footer() {
    return (
      <footer>
        <div>E-Com footer</div>
          <Nav />
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