import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class Main extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }

    render() {
        return (
            <div className="Main">
                <div className="content-body">

                </div>
            </div>
        );
    }
}

export default wrapper(Main);