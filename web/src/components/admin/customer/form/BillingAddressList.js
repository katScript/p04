import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import TableData from "components/table/TableData";
import BillingAddressData from "models/customer/billing-address-data";
import {getAllCustomerBillingAddress} from "api/customer/customer";

class BillingAddressList extends Component {
    constructor(props) {
        super(props);

        this.billingAddressData = new BillingAddressData();
        this.state = {
            keyData: this.billingAddressData.getTableKeyList(),
            label: this.billingAddressData.getLabelList(),
            data: []
        };
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
            const id = this.props.data.id;
            if (id) {
                this.getBillingAddressList(id).then((r) => {
                    this.setState({data: r});
                });
            }
        }, [data]);
    }

    getBillingAddressList = async (id) => {
        const {data} = await getAllCustomerBillingAddress(id);
        let list = [];

        for (const item of Object.values(data)) {
            this.billingAddressData.setObjectData(item);
            list.push(this.billingAddressData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="BillingAddressList">
                <h4>{this.props.data.username} Thông tin thanh toán</h4>
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


export default wrapper(BillingAddressList);