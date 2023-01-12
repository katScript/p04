import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getBillingCardRequest} from "api/admin/admin";
import {getCustomerById, applyCard} from "api/customer/customer";
import BillingCardData from "models/customer/billing-card-data";
import {common} from "utils/common";
import Swal from "sweetalert2";

class CardInfo extends Component {
    constructor(props) {
        super(props);

        this.cardData = new BillingCardData();
        this.hostOption = common.hostOption();
        this.params = this.props.params;
        this.state = {
            id : this.id,
            customerId : this.customerId,
            code : this.code,
            seri : this.seri,
            value : this.value,
            host : this.host,
            active : this.active,
            customerData: {}
        }

        this.getCardDetail(this.params.id).then((r) => {
            this.setState({
                id : r.id,
                customerId : r.customerId,
                code : r.code,
                seri : r.seri,
                value : r.value,
                host : r.host,
                active : r.active
            });

            this.getCustomerDetail(r.customerId).then((data) => {
                this.setState({
                    customerData: data
                })
            })
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

    getCardDetail = async (id) => {
        const {data} = await getBillingCardRequest(id);
        this.cardData.setObjectData(data);

        return this.cardData.getObjectData();
    }

    getCustomerDetail = async (id) => {
        const {data} = await getCustomerById(id);
        return data;
    }

    findHost = (code) => {
        let element = this.hostOption.filter(obj => {
            return obj.value === code;
        });

        if (element[0])
            return element[0].label;

        return "";
    }

    applyCard = async () => {
        await applyCard(this.state.customerId, {
            income: this.state.value,
            billingAddressId: this.state.id
        }).catch((e) => {throw e;});
    }

    apply = () => {
        this.applyCard().then(() => {
            Swal.fire({
                title: 'Thành công!',
                text: 'Đánh dấu thẻ đã sử dụng!',
                icon: 'success'
            }).then(() => {
                common.redirect("/admin/customer/payment")
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Có lỗi đã sảy ra!'
            });
        });
    }

    render() {
        return (
            <div className="Payment">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Người dùng: {this.state.customerData.username}</h4>
                                        <hr/>
                                        <div className="row">
                                            <span className="col-lg-3">Họ và tên</span>
                                            <span className="col-lg-9">{this.state.customerData.fullName}</span>
                                        </div>
                                        <div className="row">
                                            <span className="col-lg-3">SĐT</span>
                                            <span className="col-lg-9">{this.state.customerData.phone}</span>
                                        </div>
                                        <div className="row">
                                            <span className="col-lg-3">Email</span>
                                            <span className="col-lg-9">{this.state.customerData.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="card gradient-1">
                                    <div className="card-body">
                                        <div className="d-inline-block col-12">
                                            <h3 className="card-title text-white">{this.findHost(this.state.host)}</h3>
                                            <h2 className="text-white">{common.thousandFormat(this.state.value)} VND</h2>
                                            <h4 className="text-white mb-0 row"><b className="col-lg-2">Serial: </b> <span className="col-lg-10">{this.state.seri}</span></h4>
                                            <h4 className="text-white mb-0 row"><b className="col-lg-2">Mã thẻ: </b> <span className="col-lg-10">{this.state.code}</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn mb-1 btn-flat btn-primary float-right" onClick={this.apply}>Đánh dấu sử dụng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default wrapper(CardInfo);