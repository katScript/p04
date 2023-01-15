import React, {Component} from "react";
import {Link} from "react-router-dom";
import {common} from "utils/common";
import {getAllServiceByCategory} from "api/order/service";
import SideBarManager from "components/bar/SideBarManager";
import StaticContent from "hooks/StaticContent";

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.category = common.categoryOption();
        this.state = {
            facebook: [],
            instagram: [],
            tiktok: [],
            shopee: [],
            youtube: [],
            telegram: []
        }

        this.category.forEach((e) => {
            this.getServiceDataByCategory(e.value).then(async (r) => {
                await this.setState({[e.value]: r});
            });
        });
    }

    getServiceDataByCategory = async (category) => {
        const {data} = await getAllServiceByCategory(category);
        return data;
    }

    render() {
        const {facebook, instagram, tiktok, shopee, youtube, telegram} = this.state;
        const staticContent = new StaticContent();

        return (
            <div className="SideBar">
                <div className="nk-sidebar">
                    <div className="nk-nav-scroll">
                        <ul className="metismenu" id="menu">
                            <li>
                                <Link to="/">
                                    <i className="menu-icon">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/home-icon.png")} />
                                    </i><span
                                    className="nav-text">Trang chủ</span>
                                </Link>
                            </li>
                            <li className="nav-label">Người dùng</li>
                            {this.props.isLogin && (
                                <li>
                                    <a href="#account" className="has-arrow" aria-expanded="false">
                                    <i className="icon-user menu-icon"></i>
                                        <span className="nav-text">Tài khoản</span>
                                    </a>
                                    <ul aria-expanded="false">
                                        <li><Link to="/customer"><i className="icon-book-open menu-icon"></i>Thông tin tài khoản</Link></li>
                                        <li><Link to="/customer/recharge"><i className="icon-credit-card menu-icon"></i>Nạp tiền</Link></li>
                                        <li><Link to="/customer/history"><i className="icon-notebook menu-icon"></i>Lịch sử</Link></li>
                                    </ul>
                                </li>
                                )}
                            <li className="nav-label">Dịch vụ</li>
                            <li>
                                <a href="#facebook" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/facebook-icon.png")} />
                                    </i><span className="nav-text">Facebook</span>
                                </a>
                                <ul aria-expanded="false">
                                    {facebook.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#instagram" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/instagram-icon.png")} />
                                    </i><span className="nav-text">Instagram</span>
                                </a>
                                <ul aria-expanded="false">
                                    {instagram.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#tiktock" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/tiktok-icon.png")} />
                                    </i>
                                    <span className="nav-text">TikTok</span>
                                </a>
                                <ul aria-expanded="false">
                                    {tiktok.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#shopee" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/shopee-icon.png")} />
                                    </i>
                                    <span className="nav-text">Shopee</span>
                                </a>
                                <ul aria-expanded="false">
                                    {shopee.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#youtube" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/youtube-icon.png")} />
                                    </i>
                                    <span className="nav-text">Youtube</span>
                                </a>
                                <ul aria-expanded="false">
                                    {youtube.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#telegram" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <img className="icon-side-bar" src={staticContent.getPublicUrl("/images/service/telegram-icon.png")} />
                                    </i>
                                    <span className="nav-text">Telegram</span>
                                </a>
                                <ul aria-expanded="false">
                                    {telegram.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
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

export default SideBar;
