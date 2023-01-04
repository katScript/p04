import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class NavUser extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }


    render() {
        return (
            <li className="icons dropdown">
                <div className="user-img c-pointer position-relative" data-toggle="dropdown">
                    <span className="activity active"></span>
                    <img src={this.staticContent.getPublicUrl("/images/user/1.png")} height="40" width="40" alt=""/>
                </div>
                <div className="drop-down dropdown-profile   dropdown-menu">
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
                                <a href="#">
                                    <i className="icon-lock"></i> <span>Lock Screen</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-key"></i><span>Logout</span>
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