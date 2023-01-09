import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {common} from "utils/common";

class TableData extends Component {
    handleDelete = (element) => {
        // Swal.fire({
        //     title: 'Bạn có muốn xóa dữ liệu?',
        //     text: "Không thể quoay lại!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Xóa!',
        //     cancelButtonText: 'Hủy!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         const id = element.target.id;
        //         this.props.action.delete(id);
        //         Swal.fire(
        //             'Deleted!',
        //             'Dữ liệu đã được xóa thành công.',
        //             'success'
        //         ).then((r) => {
        //             common.redirect(this.props.url)
        //         })
        //     }
        // })
    }

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
                            <tr key={i}>
                                {keyData.map((k, j) => {
                                    return (<td key={j}>{item[k]}</td>);
                                })}
                                {action && (
                                    <td>
                                        <span>
                                            <Link className="mr-1 font-tiny" to={action.edit + item.id} data-toggle="tooltip" data-placement="top" title="Edit">
                                                <i className="fas fa-pen"></i></Link>
                                            <a className="ml-1 font-tiny" id={item.id} href="#" data-toggle="tooltip" data-placement="top" title="Delete" onClick={this.handleDelete}>
                                                <i className="far fa-times-circle"></i></a>
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