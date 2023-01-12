import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import OrderData from "models/order/order-data";
import {getAllOrder} from "api/order/order";

class Order extends Component {
    constructor(props) {
        super(props);

        this.orderData = new OrderData();
        this.state = {
            keyData: this.orderData.getTableKeyList(),
            label: this.orderData.getLabelList(),
            data: []
        };

        this.getAllOrderData().then((r) => {
            let list = [];
            r.forEach((e) => {
                this.orderData.setObjectData(e);
                list.push(this.orderData.getObjectData());
            })
            this.setState({data: list});
        })
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

    getAllOrderData = async () => {
        const {data} = await getAllOrder();
        return data;
    }

    render() {
        return (
            <div className="Order">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title font-medium col-3">Đơn hàng</h4>
                                        </div>
                                        <TableData label={this.state.label}
                                                   data={this.state.data}
                                                   keyData={this.state.keyData}
                                                   action={{
                                                       edit: "/admin/order/edit/",
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

export default wrapper(Order);