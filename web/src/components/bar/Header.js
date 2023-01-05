import React, {Component} from "react";
import NavHeader from "components/bar/NavHeader";
import NavSignIn from "components/bar/NavSignIn";
import NavUser from "components/bar/NavUser";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        }
    }

    render() {
        const user = this.state.user;
        return (
            <div className="Header">
                <NavHeader/>
                <div className="header">
                    <div className="header-content clearfix">
                        <div className="nav-control">
                            <div className="hamburger">
                                <span className="toggle-icon"><i className="icon-menu"></i></span>
                            </div>
                        </div>
                        <div className="header-right">
                            <ul className="clearfix">
                                { user ? <NavUser user={user} /> : <NavSignIn/> }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;