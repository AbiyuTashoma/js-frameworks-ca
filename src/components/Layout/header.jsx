import React from "react";
import { Link } from "react-router-dom";
import Nav from "./navigation";
import Logo from "./logo";

function Header() {
    return (
        <header>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;