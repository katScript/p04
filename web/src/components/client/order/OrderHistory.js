import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import OrderData from "models/order/order-data";
import {common} from "utils/common";
import TableData from "components/table/TableData";
import {Link} from "react-router-dom";
import {getOrderHistory} from "api/order/order";

class OrderHistory extends Component {
    constructor(props) {
        super(props);

        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.orderData = new OrderData();
        this.state = {
            keyData: this.orderData.getTableKeyList(),
            label: this.orderData.getLabelList(),
            data: []
        };
    }

    getTableData = () => {
        if (this.customer) {
            this.getOrderHistoryData(this.customer.id, this.props.serviceId).then((r) => {
                 this.setState({
                     data: r
                 });
            });

            return (<TableData label={this.state.label}
                               data={this.state.data}
                               keyData={this.state.keyData}
            />);
        }

        return (<h5 className="font-tiny">Đăng nhập để có thể xem lịch sử mua hàng! Đi đến trang <Link to="/auth/login">Đăng nhập</Link>.</h5>);
    }

    getOrderHistoryData = async (customerId, serviceId) => {
        const {data} = await getOrderHistory(customerId, serviceId);
        let list = [];

        for (const item of Object.values(data)) {
            this.orderData.setObjectData(item);
            list.push(this.orderData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="OrderHistory">
                {this.getTableData()}
            </div>
        );
    }
}

export default wrapper(OrderHistory);