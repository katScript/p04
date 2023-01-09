import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Bank from "components/client/customer/recharge/Bank";
import CustomerData from "models/customer/customer-data";
import {common} from "utils/common";
import Card from "components/client/customer/recharge/Card";

class Recharge extends Component {
    constructor(props) {
        super(props);

        this.customerData = new CustomerData();
        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.state = {}
    }

    render() {
        return (
            <div className="Recharge">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            NẠP TIỀN
                                        </div>
                                        <hr/>
                                        <ul className="nav nav-pills mb-3">
                                            <li className="nav-item">
                                                <a href="#bank" className="nav-link active show"
                                                   data-toggle="tab" aria-expanded="false">Thanh toán online</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#phone-card" className="nav-link"
                                                   data-toggle="tab" aria-expanded="false">Thẻ nạp điện thoại</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content br-n pn">
                                            <div id="bank" className="tab-pane active show">
                                                <div className="row align-items-center">
                                                    <div className="container-fluid">
                                                        <Bank customerId={this.customer.id}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="phone-card" className="tab-pane">
                                                <div className="row align-items-center">
                                                    <div className="container-fluid">
                                                        <Card customerId={this.customer.id}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            Lưu ý
                                        </div>
                                        <hr/>
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

export default wrapper(Recharge);