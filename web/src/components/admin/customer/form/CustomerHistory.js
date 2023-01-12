import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import TableData from "components/table/TableData";
import {getAllCustomerOrderHistory} from "api/customer/customer";
import OrderHistoryData from "models/customer/order-history-data";

class CustomerHistory extends Component {
    constructor(props) {
        super(props);

        this.orderHistoryData = new OrderHistoryData();
        this.state = {
            keyData: this.orderHistoryData.getTableKeyList(),
            label: this.orderHistoryData.getLabelList(),
            data: []
        };
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
            const id = this.props.data.id;
            if (id) {
                this.getOrderHistory(id).then((r) => {
                    this.setState({data: r});
                });
            }
        }, [data]);
    }

    getOrderHistory = async (id) => {
        const {data} = await getAllCustomerOrderHistory(id);
        let list = [];

        for (const item of Object.values(data)) {
            this.orderHistoryData.setObjectData(item);
            list.push(this.orderHistoryData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="CustomerHistory">
                <h4>{this.props.data.username} Lịch sử hoạt động</h4>
                <hr/>
                <TableData label={this.state.label}
                           data={this.state.data}
                           keyData={this.state.keyData}
                />
                <this.HooksData/>
            </div>
        );
    }
}


export default wrapper(CustomerHistory);