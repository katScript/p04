import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import BillingCardData from "models/customer/billing-card-data";
import {getAllBillingCardRequest} from "api/admin/admin";

class Payment extends Component {
    constructor(props) {
        super(props);

        this.billingCardData = new BillingCardData();
        this.state = {
            keyData: this.billingCardData.getTableKeyList(),
            label: this.billingCardData.getLabelList(),
            data: []
        };

        this.getAllCardRequest().then((r) => {
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
                label : "Customer",
                url: "/admin/customer"
            }
        ];
    }

    getAllCardRequest = async () => {
        const {data} = await getAllBillingCardRequest();
        let list = [];

        for (const item of Object.values(data)) {
            this.billingCardData.setObjectData(item);
            list.push(this.billingCardData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="Payment">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Thẻ điện thoại</h4>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   action={{
                                                       edit: "/admin/customer/payment/",
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


export default wrapper(Payment);