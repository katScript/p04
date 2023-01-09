import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import TableData from "components/table/TableData";
import {getAllCustomerOrderHistory} from "api/customer/customer";
import OrderHistoryData from "models/customer/order-history-data";

class Order extends Component {
    constructor(props) {
        super(props);

        this.customerId = this.props.customerId;
        this.orderHistory = new OrderHistoryData();
        this.state = {
            keyData: this.orderHistory.getTableKeyList(),
            label: this.orderHistory.getLabelList(),
            data: []
        };

        this.getOrderHistory(this.customerId).then((r) => {
            this.setState({data: r});
        });
    }

    getOrderHistory = async (id) => {
        const {data} = await getAllCustomerOrderHistory(id);
        let list = [];

        for (const item of Object.values(data)) {
            this.orderHistory.setObjectData(item);
            list.push(this.orderHistory.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="Transaction">
                <TableData label={this.state.label}
                           data={this.state.data}
                           keyData={this.state.keyData}
                />
            </div>
        );
    }
}

export default wrapper(Order);