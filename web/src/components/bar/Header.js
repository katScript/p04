import React, {Component} from "react";
import NavHeader from "components/bar/NavHeader";
import NavSignIn from "components/bar/NavSignIn";
import NavUser from "components/bar/NavUser";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <NavHeader/>
                <div className="header">
                    <div className="header-content clearfix">
                        <div className="header-right">
                            <ul className="clearfix">
                                { this.props.user ? <NavUser/> : <NavSignIn/> }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;