import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import TableData from "components/table/TableData";
import {getAllCustomerBalanceHistory} from "api/customer/customer";
import BalanceHistoryData from "models/customer/balance-history-data";

class BalanceHistory extends Component {
    constructor(props) {
        super(props);

        this.balanceHistory = new BalanceHistoryData();
        this.state = {
            keyData: this.balanceHistory.getTableKeyList(),
            label: this.balanceHistory.getLabelList(),
            data: []
        };
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
            const id = this.props.data.id;
            if (id) {
                this.getBalanceHistory(id).then((r) => {
                    this.setState({data: r});
                });
            }
        }, [data]);
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
            <div className="BalanceHistory">
                <h4>{this.props.data.username} BALANCE HISTORY</h4>
                <TableData label={this.state.label}
                           data={this.state.data}
                           keyData={this.state.keyData}
                />
                <this.HooksData/>
            </div>
        );
    }
}


export default wrapper(BalanceHistory);