import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import {Link} from "react-router-dom";
import UserData from "models/user/user-data";

class NavUser extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;

        this.userData = new UserData();
    }

    logout = () => {
        const user = this.props.user;
        this.userData.removeUserData(user.role);
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
                            <li>
                                <a href="#"><i className="icon-user"></i>
                                    <span>Profile</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-envelope-open"></i>
                                    <span>Inbox</span>
                                    <div className="badge gradient-3 badge-pill badge-primary">3</div>
                                </a>
                            </li>

                            <hr className="my-2"/>
                            <li>
                                <Link to="/auth/login" onClick={this.logout}>
                                    <i className="icon-key"></i><span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}

export default wrapper(NavUser);