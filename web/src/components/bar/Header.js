import React, {Component, useEffect} from "react";
import NavHeader from "components/bar/NavHeader";
import NavSignIn from "components/bar/NavSignIn";
import NavUser from "components/bar/NavUser";
import {common} from "utils/common";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    HooksData = () => {
        let userData = localStorage.getItem(common.userHashId.user);
        useEffect(() => {
            if (userData) {
                this.setState({
                    user: JSON.parse(userData)
                })
            }
        }, [userData]);
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
                <this.HooksData/>
            </div>
        );
    }
}

export default Header;