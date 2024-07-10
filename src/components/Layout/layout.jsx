import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./navigation";
import Header from "./header";
import Footer from "./footer";

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