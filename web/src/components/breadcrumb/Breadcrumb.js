import React, {Component} from "react";
import {Link} from "react-router-dom";

class Breadcrumb extends Component {
    render() {
        const listItems = this.props.item.map((element, i) => {
            let classItem = "breadcrumb-item";
            if (element.active)
                classItem += " active";

            return (
                <li className={classItem} key={i}>
                    <Link to={element.url}>{element.label}</Link>
                </li>
            );
        });

        return (
            <div className="row page-titles mx-0">
                <div className="col p-md-0">
                    <ol className="breadcrumb">
                        {listItems}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;