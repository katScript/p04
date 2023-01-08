import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class User extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }

    staticContentImport = () => {
    }

    render() {
        return (
            <div className="User">
                <div className="content-body">

                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(User);