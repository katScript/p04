import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import AdminSideBar from "components/bar/AdminSideBar";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import ServiceData from "models/order/service";
import {getAllService} from "api/order/service";

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
                <AdminSideBar/>
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Package</h4>
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


export default wrapper(Service);