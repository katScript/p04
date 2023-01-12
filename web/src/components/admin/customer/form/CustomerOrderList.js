import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import TableData from "components/table/TableData";
import OrderData from "models/order/order-data";
import {getAllOrderByCustomerId} from "api/order/order";

class CustomerOrderList extends Component {
    constructor(props) {
        super(props);

        this.orderData = new OrderData();
        this.state = {
            keyData: this.orderData.getTableKeyList(),
            label: this.orderData.getLabelList(),
            data: []
        };
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
            const id = this.props.data.id;
            if (id) {
                this.getOrderData(id).then((r) => {
                    let list = [];
                    r.forEach((e) => {
                        this.orderData.setObjectData(e);
                        list.push(this.orderData.getObjectData());
                    });

                    this.setState({data: list});
                });
            }
        }, [data]);
    }

    getOrderData = async (id) => {
        const {data} = await getAllOrderByCustomerId(id);
        let list = [];

        for (const item of Object.values(data)) {
            this.orderData.setObjectData(item);
            list.push(this.orderData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="CustomerOrderList">
                <h4>{this.props.data.username} Lịch sử mua hàng</h4>
                <hr/>
                <TableData label={this.state.label}
                           data={this.state.data}
                           keyData={this.state.keyData}
                           action={{
                               edit: "/admin/order/edit/",
                               delete: ""
                           }}
                />
                <this.HooksData/>
            </div>
        );
    }
}


export default wrapper(CustomerOrderList);