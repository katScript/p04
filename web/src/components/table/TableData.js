import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import {Link} from "react-router-dom";

class TableData extends Component {
    render() {
        const {label, data, keyData, action} = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        {label.map((item, i) => {
                            return (<th key={i}>{item}</th>);
                        })}
                        {action && <th>Action</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr key={i} className="active">
                                {keyData.map((k, j) => {
                                    return (<td key={j}>{item[k]}</td>);
                                })}
                                {action && (
                                    <td>
                                        <span>
                                            <Link className="mr-1 font-tiny" to="#" data-toggle="tooltip" data-placement="top" title="Edit">
                                                <i className="fa fa-pencil color-muted m-r-5"></i> </Link>
                                            <Link className="ml-1 font-tiny" to="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                                <i className="fa fa-close color-danger"></i></Link>
                                        </span>
                                    </td>
                                )}
                            </tr>
                        );

                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default wrapper(TableData);