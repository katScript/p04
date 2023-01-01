import React from "react";
import {Link} from "react-router-dom";

function Breadcrumb({item}) {
    const listItems = item.map((element) => {
        let classItem = "breadcrumb-item";
        if (element.active)
            classItem += " active";

        return (
            <li className={classItem}>
                <Link to={element.url}>element.label</Link>
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

export default Breadcrumb;