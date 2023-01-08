import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class Order extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }

    staticContentImport = () => {
    }

    render() {
        return (
            <div className="Order">
                <div className="content-body">

                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(Order);