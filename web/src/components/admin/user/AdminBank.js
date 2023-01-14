import React, {Component} from "react";
import {getAllBillingAddress} from "api/admin/admin";
import {Link} from "react-router-dom";
import {common} from "utils/common";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

class AdminBank extends Component {
    constructor(props) {
        super(props);

        this.billingOption = common.billingOption();
        this.state = {
            data: [],
        }

        this.fetchAllCustomerBillingAddress().then((r) => {
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
                label : "Admin",
                url: "#"
            }
        ];
    }

    fetchAllCustomerBillingAddress = async () => {
        const {data} = await getAllBillingAddress();
        return data;
    }

    findBillingOption = (key) => {
        const data = this.billingOption.filter(obj => {
            return obj.value === key;
        });

        if (data.length > 0)
            return data[0].label;

        return "Không rõ";
    }

    render() {
        const list = this.state.data;

        return (
            <div className="AdminBank">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title font-medium col-3">Phương thức thanh toán</h4>
                                        </div>
                                        <hr/>
                                            {list.map((e, i) => {
                                                return (
                                                    <div className="card card-widget" key={i}>
                                                        <div className="card-body gradient-1">
                                                            <div className="d-inline-block col-lg-9">
                                                                <h4 className="text-white row">
                                                                    <span className="col-lg-12">{e.billingName}</span>
                                                                </h4>
                                                                <h2 className="mt-4 text-white row">
                                                                    <span className="col-md-3">STK</span>
                                                                    <span className="col-md-9">{e.accountNumber}</span></h2>
                                                                <div className="mt-4">
                                                                    <h5 className="text-white row">
                                                                        <span className="col-md-3">HTTT</span>
                                                                        <span className="col-md-9">{this.findBillingOption(e.type)}</span>
                                                                    </h5>
                                                                    <h5 className="text-white row">
                                                                        <span className="col-md-3">Chủ tài khoản</span>
                                                                        <span className="col-md-9">{e.holder}</span>
                                                                    </h5>
                                                                    <h5 className="text-white row">
                                                                        <span className="col-md-3">Địa chỉ</span>
                                                                        <span className="col-md-9">{e.address}</span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="float-right col-lg-3">
                                                                <Link to={"/admin/bank/edit/" + e.id} type="button" className=" btn mb-1 btn-rounded btn-primary">
                                           <span className="btn-icon-left text-dark">
                                               <i className="fas fa-pen"></i>
                                           </span>Thay đổi
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                            <Link to="/admin/bank/edit" type="button"
                                                  className="btn mb-1 btn-rounded btn-primary">
                                           <span className="btn-icon-left text-dark">
                                               <i className="fa fa-plus color-info"></i>
                                           </span>Thêm phương thức thanh toán mới
                                            </Link>
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

export default AdminBank;