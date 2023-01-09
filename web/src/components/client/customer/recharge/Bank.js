import React, {Component} from "react";
import {getAllCustomerBillingAddress} from "api/customer/customer";
import {Link} from "react-router-dom";
import {common} from "utils/common";

class Bank extends Component {
    constructor(props) {
        super(props);

        this.billingOption = common.billingOption();
        const id = this.props.customerId;
        this.state = {
            data: [],
        }

        this.fetchAllCustomerBillingAddress(id).then((r) => {
            this.setState({data: r});
        });
    }

    fetchAllCustomerBillingAddress = async (id) => {
        const {data} = await getAllCustomerBillingAddress(id);
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
            <div className="Bank">
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
                                   <Link to={"/customer/recharge/billing/" + e.id} type="button" className=" btn mb-1 btn-rounded btn-primary">
                                           <span className="btn-icon-left text-dark">
                                               <i className="fas fa-pen"></i>
                                           </span>Thay đổi
                                   </Link>
                               </div>
                           </div>
                       </div>
                   )
                })}


                <Link to="/customer/recharge/billing" type="button"
                      className="btn mb-1 btn-rounded btn-primary">
                                           <span className="btn-icon-left text-dark">
                                               <i className="fa fa-plus color-info"></i>
                                           </span>Thêm phương thức thanh toán mới
                </Link>
            </div>
        );
    }
}

export default Bank;