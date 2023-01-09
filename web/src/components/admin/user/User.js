import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import AdminData from "models/admin/admin-data";
import {getAllAdmin, deleteAdmin} from "api/admin/admin";
import {common} from "utils/common";

class User extends Component {
    constructor(props) {
        super(props);

        this.adminData = new AdminData();
        this.state = {
            keyData: this.adminData.getTableKeyList(),
            label: this.adminData.getLabelList(),
            data: []
        };

        this.getAllAdmin().then((r) => {
            this.setState({data: r});
        });
    }

    prepareBreadcrumb = () => {
        return [
            {
                active : false,
                label : "Dashboard",
                url: "/admin"
            },
            {
                active : true,
                label : "Admin",
                url: "#"
            }
        ];
    }

    getAllAdmin = async () => {
        const {data} = await getAllAdmin();
        let list = [];

        for (const item of Object.values(data)) {
            this.adminData.setObjectData(item);
            list.push(this.adminData.getObjectData());
        }

        return list;
    }

    handleAddNewClick = () => {
        common.redirect("/admin/user/register")
    }

    render() {
        return (
            <div className="User">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title font-medium col-3">Admin User</h4>
                                            <div className="col-9">
                                                <span className="col-lg-3">
                                                    <button className="btn btn-primary float-right" onClick={this.handleAddNewClick}>Đăng ký mới admin</button>
                                                </span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   url={"/admin/user"}
                                                   action={{
                                                       edit: "/admin/user/edit/",
                                                       delete: deleteAdmin
                                                   }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default wrapper(User);