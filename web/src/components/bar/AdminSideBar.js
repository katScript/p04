import React, {Component} from "react";
import {Link} from "react-router-dom";
import SideBarManager from "./SideBarManager";

class AdminSideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                <div className="nk-sidebar">
                    <div className="nk-nav-scroll">
                        <ul className="metismenu" id="menu">
                            <li className="nav-label">Dashboard</li>
                            <li>
                                <Link to="#dashboard" className="has-arrow" aria-expanded="false">
                                    <i className="icon-speedometer menu-icon"></i><span
                                    className="nav-text">Dashboard</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin">Home</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a href="#customer" className="has-arrow" aria-expanded="false">
                                    <i className="icon-user menu-icon"></i><span
                                    className="nav-text">Customer</span>
                                </a>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/customer">Customer</Link></li>
                                    <li><Link to="/admin/customer/payment">Payment</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a href="#order" className="has-arrow" aria-expanded="false">
                                    <i className="icon-drawar menu-icon"></i><span
                                    className="nav-text">Order</span>
                                </a>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/order">Order</Link></li>
                                    <li><Link to="/admin/service">Services</Link></li>
                                    <li><Link to="/admin/package">Package</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#user" className="has-arrow" aria-expanded="false">
                                    <i className="icon-briefcase menu-icon"></i><span className="nav-text">User</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/user">Admin User</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <SideBarManager/>
            </div>
        );
    }
}


export default AdminSideBar;
