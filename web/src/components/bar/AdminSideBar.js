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
                            <li className="nav-label">Bảng thống kê</li>
                            <li>
                                <Link to="#dashboard" className="has-arrow" aria-expanded="false">
                                    <i className="icon-speedometer menu-icon"></i><span
                                    className="nav-text">Bảng thống kê</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin">Trang chủ</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a href="#customer" className="has-arrow" aria-expanded="false">
                                    <i className="icon-user menu-icon"></i><span
                                    className="nav-text">Khách hàng</span>
                                </a>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/customer">Khách hàng</Link></li>
                                    <li><Link to="/admin/customer/payment">Yêu cầu nạp thẻ</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a href="#order" className="has-arrow" aria-expanded="false">
                                    <i className="icon-drawar menu-icon"></i><span
                                    className="nav-text">Dịch vụ</span>
                                </a>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/order">Đơn hàng</Link></li>
                                    <li><Link to="/admin/service">Dịch vụ</Link></li>
                                    <li><Link to="/admin/package">Gói dịch vụ</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#user" className="has-arrow" aria-expanded="false">
                                    <i className="icon-briefcase menu-icon"></i><span className="nav-text">Người dùng</span>
                                </Link>
                                <ul aria-expanded="false">
                                    <li><Link to="/admin/user">Quản trị viên</Link></li>
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
