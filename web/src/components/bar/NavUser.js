import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import UserData from "models/user/user-data";
import {common} from "utils/common";
import {Link} from "react-router-dom";

class NavUser extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;

        this.userData = new UserData();
    }

    logout = () => {
        const user = this.props.user;
        this.userData.removeUserData(user.role);
        common.redirect(window.location.pathname);
    }

    render() {
        return (
            <li className="icons dropdown">
                <div className="user-img c-pointer position-relative" data-toggle="dropdown">
                    <span className="activity active"></span>
                    <img src={this.staticContent.getPublicUrl("/images/user/1.png")} height="40" width="40" alt=""/>
                </div>
                <div className="drop-down dropdown-profile dropdown-menu">
                    <div className="dropdown-content-body">
                        <ul>
                            {
                                !this.props.admin && (
                                    <li>
                                        <Link to="/customer"><i className="icon-user"></i>
                                            <span>Thông tin</span></Link>
                                    </li>
                                )
                            }
                            <hr className="my-2"/>
                            <li>
                                <a href="#" onClick={this.logout}>
                                    <i className="icon-key"></i><span>Đăng xuất</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}

export default wrapper(NavUser);