import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import OrderData from "models/order/order-data";
import {getOrderById, changeOrderStatus} from "api/order/order";
import Swal from "sweetalert2";

class AdminOrderForm extends Component {
    constructor(props) {
        super(props);

        this.orderData = new OrderData();
        this.params = this.props.params;
        this.state = {
            id : null,
            customerId : null,
            item : {},
            target : "",
            status : "",
            qty : "",
            subtotal : "",
            couponCode : "",
            discountPrice : "",
            note : ""
        };

        this.fetchOrderData(this.params.id).then((r) => {
            this.setState({
                id : r.id,
                customerId : r.customerId,
                item : r.item,
                target : r.target,
                status : r.status,
                qty : r.qty,
                subtotal : r.subtotal,
                couponCode : r.couponCode,
                discountPrice : r.discountPrice,
                note : r.note,
            });
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

    fetchOrderData = async (id) => {
        const {data} = await getOrderById(id);
        return data;
    }

    completeOrder = async () => {
        await changeOrderStatus({
            id: this.state.id,
            status:"complete"
        }).catch((e) => {throw e;});
    }

    getCompleteButton = () => {
        if (this.state.status !== "Complete") {
            return (<button type="button" onClick={this.handleClickComplete} className="btn mb-1 btn-flat btn-primary float-right">Hoàn thành</button>);
        }

        return (
            <div className="row float-right">
                <div className="col font-medium text-green">Đơn hàng đã hoàn thành</div>
            </div>
        );
    }

    handleClickComplete = () => {
        this.completeOrder().then((r) => {
            Swal.fire({
                title: 'Lưu thành công!',
                text: `Đơn hàng với mã #${this.state.id}`,
                icon: 'success'
            }).then(() => {
                common.redirect("/admin/order")
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Có lỗi xảy ra!'
            });
        });
    }

    render() {
        return (
            <div className="UserForm">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title font-medium col-3">Đơn hàng #{this.state.id}</h4>
                                        <hr/>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <span className="col-lg-4 font-small">Gói dịch vụ</span>
                                                <span className="col-lg-8 font-small">{this.state.item.packageName}</span>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <span className="col-lg-4 font-small">Links</span>
                                                <span className="col-lg-8 font-small">{this.state.target}</span>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <span className="col-lg-4 font-small">Số lượng</span>
                                                <span className="col-lg-8 font-small">{this.state.qty}</span>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <span className="col-lg-4 font-small">Giá trị đơn hàng</span>
                                                <span className="col-lg-8 font-small">{common.thousandFormat(this.state.subtotal)} VND</span>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <span className="col-lg-4 font-small">Ghi chú</span>
                                                <span className="col-lg-8 font-small">{this.state.note}</span>
                                            </div>

                                            {this.getCompleteButton()}
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

export default wrapper(AdminOrderForm);