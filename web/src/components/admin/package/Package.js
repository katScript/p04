import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import {getAllPackage} from "api/order/package";
import PackageData from "models/order/package-data";
import {Link} from "react-router-dom";

class Package extends Component {
    constructor(props) {
        super(props);

        this.packageData = new PackageData();
        this.state = {
            keyData: this.packageData.getTableKeyList(),
            label: this.packageData.getLabelList(),
            data: []
        };

        this.getAllPackageData().then((r) => {
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
                label : "Service",
                url: "/admin/package"
            }
        ];
    }

    getAllPackageData = async () => {
        const {data} = await getAllPackage();
        let list = [];

        for (const item of Object.values(data)) {
            this.packageData.setObjectData(item);
            list.push(this.packageData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="Package">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title font-medium col-3">Gói dịch vụ</h4>
                                            <div className="col-9">
                                                <span className="col-lg-3">
                                                    <Link className="btn btn-primary float-right" to="/admin/package/edit">Tạo gói mới</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   action={{
                                                       edit: "/admin/package/edit/",
                                                       delete: ""
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


export default wrapper(Package);