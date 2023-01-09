import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import Transaction from "./history/Transaction";
import Order from "./history/Order";

class History extends Component {
    constructor(props) {
        super(props);

        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.state = {}
    }

    render() {
        return (<div className="History">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="card col-lg-12">
                                <div className="card-body">
                                    <h4 className="card-title font-medium">Lịch sử hoạt động</h4>
                                    <hr/>
                                    <div className="row align-items-center">
                                        <div className="col-md-8 col-xl-10 order-2 order-md-1">
                                            <div className="tab-content">
                                                <div id="h-order" className="tab-pane text-md-right fade active show">
                                                    <Order customerId={this.customer.id}/>
                                                </div>
                                                <div id="h-transaction" className="tab-pane text-md-right fade">
                                                    <Transaction customerId={this.customer.id}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xl-2 order-1 order-md-2 mb-3 mb-md-0">
                                            <div className="nav flex-column nav-pills">
                                                <a href="#h-order" data-toggle="pill"
                                                   className="nav-link active show">Lịch sử mua hàng</a>
                                                <a href="#h-transaction" data-toggle="pill"
                                                   className="nav-link">Lịch sử giao dịch</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default wrapper(History);