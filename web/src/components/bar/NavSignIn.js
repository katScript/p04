import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavSignIn extends Component {
    render() {
        const path = window.location.pathname;
        let loginClass = path === "/auth/login" ? "font-weight-bold" : "font-weight-light",
            registerClass = path === "/auth/register" ? "font-weight-bold" : "font-weight-light";

        return (
            <li className="icons">
                <Link to="/auth/login">
                    <span className={loginClass}>Đăng nhập</span>
                </Link>
                <span>/</span>
                <Link to="/auth/register">
                    <span className={registerClass}>Đăng ký</span>
                </Link>
            </li>
        );
    }
}

export default NavSignIn;