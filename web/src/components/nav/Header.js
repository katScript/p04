import React from "react";
import NavHeader from "components/nav/NavHeader";
import NavSignIn from "components/nav/NavSignIn";
import NavUser from "components/nav/NavUser";

function Header({user}) {
    return (
        <div className="Header">
            <NavHeader/>
            <div className="header">
                <div className="header-content clearfix">
                    <div className="header-right">
                        <ul className="clearfix">
                            { user ? <NavUser/> : <NavSignIn/> }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;