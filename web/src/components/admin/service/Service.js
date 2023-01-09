import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import ServiceData from "models/order/service-data";
import {getAllService} from "api/order/service";
import {Link} from "react-router-dom";

class Service extends Component {
    constructor(props) {
        super(props);

        this.serviceData = new ServiceData();
        this.state = {
            keyData: this.serviceData.getTableKeyList(),
            label: this.serviceData.getLabelList(),
            data: []
        };

        this.getAllServiceData().then((r) => {
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
                url: "/admin/service"
            }
        ];
    }

    getAllServiceData = async () => {
        const {data} = await getAllService();
        let list = [];

        for (const item of Object.values(data)) {
            this.serviceData.setObjectData(item);
            list.push(this.serviceData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="Service">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title font-medium col-3">Service</h4>
                                            <div className="col-9">
                                                <span className="col-lg-3">
                                                    <Link to="/admin/service/edit" className="btn btn-primary float-right">Tạo dịch vụ mới</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   action={{
                                                       edit: "/admin/service/edit/",
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


export default wrapper(Service);