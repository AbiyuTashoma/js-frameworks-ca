import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div class="logo-container">
            <Link class="logo" to="/">eCom.</Link>
        </div>
    );
}

export default Logo;