import React, {Component} from "react";
import {Link} from "react-router-dom";

class SideBar extends Component {

    render() {
        return (
            <div className="SideBar">
                <div className="nk-sidebar">
                    <div className="nk-nav-scroll">
                        <ul className="metismenu" id="menu">
                            <li className="nav-label">Dashboard</li>
                            <li>
                                <Link to="/admin" className="has-arrow" aria-expanded="false">
                                    <i className="icon-speedometer menu-icon"></i><span
                                    className="nav-text">Dashboard</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin">Home</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <Link to="/admin/service" className="has-arrow" aria-expanded="false">
                                    <i className="icon-drawar menu-icon"></i><span
                                    className="nav-text">Services</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/service">List Services</Link></li>
                                    <li><Link to="/admin/service/detail">Service Detail</Link></li>
                                    <li><Link to="/admin/package">List Package</Link></li>
                                    <li><Link to="/admin/package/detail">Package Detail</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
