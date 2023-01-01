import React from "react";
import staticContent from "hooks/staticContent";

function NavHeader() {
    return (
        <div className="NavHeader">
            <div className="nav-header">
                <div className="brand-logo">
                    <a href="#">
                        <b className="logo-abbr">
                            <img src={staticContent.getPublicUrl("/images/logo.png")} alt=""/>
                        </b>
                        <span className="logo-compact">
                            <img src={staticContent.getPublicUrl("/images/logo-compact.png")} alt=""/>
                        </span>
                        <span className="brand-title">
                            <img src={staticContent.getPublicUrl("/images/logo-text.png")} alt=""/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavHeader;