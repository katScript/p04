import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

class Recharge extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (<div className="Recharge">
            <div className="content-body">
                <Breadcrumb item={[]}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
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
                                                    <h1>Test</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="phone-card" className="tab-pane">
                                            <div className="row align-items-center">
                                                <div className="container-fluid">
                                                    <h1>Test</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
        </div>);
    }
}

export default wrapper(Recharge);