import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }

    render() {
        return (
            <div className="NavHeader">
                <div className="nav-header">
                    <div className="brand-logo">
                        <a href="#">
                            <b className="logo-abbr">
                                <img src={this.staticContent.getPublicUrl("/images/logo.png")} alt=""/>
                            </b>
                            <span className="logo-compact">
                            <img src={this.staticContent.getPublicUrl("/images/logo-compact.png")} alt=""/>
                        </span>
                            <span className="brand-title">
                            <img src={this.staticContent.getPublicUrl("/images/logo-text.png")} alt=""/>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default wrapper(NavHeader);