import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import TableData from "components/table/TableData";
import {getAllCustomer} from "api/customer/customer";
import CustomerData from "models/customer/customer-data";

class Customer extends Component {
    constructor(props) {
        super(props);

        this.customerData = new CustomerData();
        this.state = {
            keyData: this.customerData.getTableKeyList(),
            label: this.customerData.getLabelList(),
            data: []
        };

        this.getAllCustomer().then((r) => {
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

    getAllCustomer = async () => {
        const {data} = await getAllCustomer();
        let list = [];

        for (const item of Object.values(data)) {
            this.customerData.setObjectData(item);
            list.push(this.customerData.getObjectData());
        }

        return list;
    }

    render() {
        return (
            <div className="Customer">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Customer</h4>
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


export default wrapper(Customer);