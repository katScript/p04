import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import BalanceHistoryData from "models/customer/balance-history-data";
import TableData from "components/table/TableData";
import {getAllCustomerBalanceHistory} from "api/customer/customer";

class Transaction extends Component {
    constructor(props) {
        super(props);

        this.customerId = this.props.customerId;
        this.balanceHistory = new BalanceHistoryData();
        this.state = {
            keyData: this.balanceHistory.getTableKeyList(),
            label: this.balanceHistory.getLabelList(),
            data: []
        };

        this.getBalanceHistory(this.customerId).then((r) => {
            this.setState({data: r});
        });
    }

    getBalanceHistory = async (id) => {
        const {data} = await getAllCustomerBalanceHistory(id);
        let list = [];

        for (const item of Object.values(data)) {
            this.balanceHistory.setObjectData(item);
            list.push(this.balanceHistory.getObjectData());
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

export default wrapper(Transaction);