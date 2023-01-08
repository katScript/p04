import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import AdminData from "models/admin/admin-data";
import {getAllAdmin} from "api/admin/admin";

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
                                        <h4 className="card-title">Admin User</h4>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   action={true}
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