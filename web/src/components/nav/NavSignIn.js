import React from "react";
import {Link} from "react-router-dom";

function NavSignIn() {
    const path = window.location.pathname;
    let loginClass = path === "/auth/login" ? "font-weight-bold" : "font-weight-light",
        registerClass = path === "/auth/register" ? "font-weight-bold" : "font-weight-light";

    return (
        <li className="icons">
            <Link to="/auth/login">
                <span className={loginClass}>Login</span>
            </Link>
            <span>/</span>
            <Link to="/auth/register">
                <span className={registerClass}>Register</span>
            </Link>
        </li>
    );
}

export default NavSignIn;