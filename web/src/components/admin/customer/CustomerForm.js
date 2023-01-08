import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getCustomerById} from "api/customer/customer";
import CustomerData from "models/customer/customer-data";
import CustomerInformationForm from "components/admin/customer/form/CustomerInformationForm";
import BillingAddressList from "components/admin/customer/form/BillingAddressList";
import BalanceHistoryList from "components/admin/customer/form/BalanceHistoryList";

class CustomerForm extends Component {
    constructor(props) {
        super(props);

        this.customerData = new CustomerData();
        this.params = this.props.params;
        this.state = {
            id: "",
            fullName: "",
            phone: "",
            email: "",
            subscription: "",
            currentMoney: "",
            totalMoney: "",
            orders: [],
            billingAddress: [],
            balanceHistory: [],
            customerLog: [],
            username: ""
        };

        this.getCustomerDetail(this.params.id).then((r) => {
            this.setState({
                id: r.id,
                fullName: r.fullName,
                phone: r.phone,
                email: r.email,
                subscription: r.subscription,
                currentMoney: r.currentMoney,
                totalMoney: r.totalMoney,
                orders: r.orders,
                billingAddress: r.billingAddress,
                balanceHistory: r.balanceHistory,
                customerLog: r.customerLog,
                username: r.username
            });
        });
    }

    prepareBreadcrumb = () => {
        return [
            {
                active: false,
                label: "Dashboard",
                url: "/admin"
            },
            {
                active: false,
                label: "Customer",
                url: "/admin/customer"
            },
            {
                active: true,
                label: "Customer Detail",
                url: "#"
            }
        ];
    }

    getCustomerDetail = async (id) => {
        const {data} = await getCustomerById(id);
        this.customerData.setObjectData(data);

        return this.customerData.getObjectData();
    }

    render() {
        return (
            <div className="CustomerForm">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">USER NAME: {this.state.username}</h4>
                                        <hr/>
                                        <div className="basic-list-group">
                                            <div className="row">
                                                <div className="col-xl-2 col-md-2 col-sm-1 mb-2 mb-sm-0">
                                                    <div className="list-group" id="list-tab" role="tablist">
                                                        <a className="list-group-item list-group-item-action active show"
                                                            id="list-home-list" data-toggle="list" href="#information"
                                                            role="tab" aria-controls="information" aria-selected="true">Customer Information</a>

                                                        <a className="list-group-item list-group-item-action"
                                                            id="list-profile-list" data-toggle="list" href="#order"
                                                            role="tab" aria-controls="order" aria-selected="false">Order</a>

                                                        <a className="list-group-item list-group-item-action"
                                                            id="list-messages-list" data-toggle="list" href="#billing-address"
                                                            role="tab" aria-controls="billing-address" aria-selected="false">Billing Address</a>

                                                        <a className="list-group-item list-group-item-action"
                                                            id="list-settings-list" data-toggle="list" href="#balance"
                                                            role="tab" aria-controls="balance" aria-selected="false">Balance History</a>

                                                        <a className="list-group-item list-group-item-action"
                                                            id="list-settings-list" data-toggle="list" href="#log"
                                                            role="tab" aria-controls="log" aria-selected="false">Active History</a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10 col-md-10 col-sm-11">
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade active show" id="information">
                                                            <CustomerInformationForm data={this.state}/>
                                                        </div>
                                                        <div className="tab-pane fade" id="order"
                                                             role="tabpanel">
                                                            <p>Velit aute mollit ipsum ad dolor consectetur nulla
                                                                officia culpa adipisicing exercitation fugiat tempor.
                                                                Voluptate deserunt sit sunt nisi aliqua fugiat proident
                                                                ea ut. Mollit voluptate reprehenderit occaecat
                                                                nisi ad non minim tempor sunt voluptate consectetur
                                                                exercitation id ut nulla. Ea et fugiat aliquip nostrud
                                                                sunt incididunt consectetur culpa aliquip eiusmod dolor.
                                                                Anim ad Lorem aliqua in cupidatat nisi
                                                                enim eu nostrud do aliquip veniam minim.</p>
                                                        </div>
                                                        <div className="tab-pane fade" id="billing-address">
                                                            <BillingAddressList data={this.state}/>
                                                        </div>
                                                        <div className="tab-pane fade" id="balance">
                                                            <BalanceHistoryList data={this.state}/>
                                                        </div>
                                                        <div className="tab-pane fade" id="log">
                                                            <p>Velit aute mollit ipsum ad dolor consectetur nulla
                                                                officia culpa adipisicing exercitation fugiat tempor.
                                                                Voluptate deserunt sit sunt nisi aliqua fugiat proident
                                                                ea ut. Mollit voluptate reprehenderit occaecat
                                                                nisi ad non minim tempor sunt voluptate consectetur
                                                                exercitation id ut nulla. Ea et fugiat aliquip nostrud
                                                                sunt incididunt consectetur culpa aliquip eiusmod dolor.
                                                                Anim ad Lorem aliqua in cupidatat nisi
                                                                enim eu nostrud do aliquip veniam minim.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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


export default wrapper(CustomerForm);