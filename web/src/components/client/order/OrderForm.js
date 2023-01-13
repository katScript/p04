import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getServiceById} from "api/order/service";
import {common} from "utils/common";
import Loader from "components/common/Loader";
import Swal from "sweetalert2";
import {placeOrder} from "api/order/order";
import CustomerData from "models/customer/customer-data";
import {Link} from "react-router-dom";
import OrderHistory from "components/client/order/OrderHistory";
import FormValidateRule from "components/common/FormValidateRule";

class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.staticContent = this.props.staticContent;

        this.customerData = new CustomerData();
        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));

        this.state = {
            service: {},
            items: [],
            target: "",
            qty: 0,
            note: "",
            packageId: "",
            packagePrice: 0,
            packageNote: "",
            subtotal: 0
        };
    }

    getPackageListSelect = (items) => {
        if (items.length > 0) {
            return (
                <div className="basic-list-group">
                    <ul className="list-group">
                        {items.map((e, i) => {
                            return (
                                <li key={e.id} id={i}
                                    className="list-group-item"
                                    onClick={this.handleSelectPackage}>
                                    {e.packageName} {e.status &&
                                    <span className="badge badge-success">{e.status}</span>}
                                    <span className="label label-info float-right">{common.thousandFormat(e.price)} VND</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        }

        return (<span className="text-danger">Không có gói dịch vụ nào khả dụng!</span>);
    }

    handleChangeInput = async (event) => {
        const {name, value} = event.target
        await this.setState({[name]: value});
        await this.handleChangePrice();
    }

    handleChangePrice = async () => {
        this.setState({
            subtotal: common.thousandFormat(this.state.qty * this.state.packagePrice)
        });
    }

    handleSelectPackage = async (event) => {
        let element = event.target,
            packageData = this.state.items[element.id];

        element.parentElement.childNodes.forEach((e) => {
            if (e && e.classList.contains("active-package")) {
                e.classList.remove("active-package");
            }
        });

        element.classList.add("active-package");
        await this.setState({
            packageId: packageData.id,
            packageNote: packageData.note,
            packagePrice: packageData.price
        });
        await this.handleChangePrice();
    }

    getServiceData = async (id) => {
        const {data} = await getServiceById(id);
        return data;
    }

    placeOrder = async () => {
        await placeOrder({
            customerId: this.customer.id,
            item: {
                id: this.state.packageId
            },
            target: this.state.target,
            qty: this.state.qty,
            note: this.state.note
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.packageId && this.state.packageId === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Không có gói dịch vụ nào đang được chọn!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        } else if (this.this.customer.currentMoney < (this.state.qty * this.state.packagePrice)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Bạn không có đủ tiền trong tài khoản!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        } else {
            this.placeOrder().then(() => {
                return Swal.fire({
                    title: 'Thành công!',
                    text: 'Đặt hàng thành công!',
                    icon: 'success',
                    confirmButtonText: 'Đóng',
                }).then(r => {
                    common.redirect(`/place/order/service/${this.props.params.id}`);
                });
            }).catch((e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Có lỗi sảy ra vui lòng thử lại sau!",
                    confirmButtonText: 'Đóng',
                }).then(r => {
                });
            });
        }
    }

    HooksData = () => {
        const params = this.props.params;
        useEffect(() => {
            common.loadScreen("#order-form-loader", "#order-form-main");
            this.getServiceData(this.props.params.id).then((r) => {
                this.setState({
                    service: r,
                    items: r.items,
                    packageNote: ""
                });
            });

        }, [params]);
    }

    getSubmitButton = () => {
        if (this.customer != null)
            return (<button type="submit" className="btn btn-primary">Đặt mua dịch vụ</button>);

        return (
            <h5 className="font-tiny">Đăng nhập để có thể đặt hàng! Đi đến trang <Link to="/auth/login">Đăng nhập</Link>.
            </h5>);
    }

    render() {
        const service = this.state.service,
            items = this.state.items;

        return (
            <div className="OrderForm">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <Loader id={"order-form-loader"}/>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            {service.serviceName}
                                        </div>
                                        <hr/>
                                        <div className="custom-tab-1">
                                            <ul className="nav nav-tabs mb-3">
                                                <li className="nav-item">
                                                    <a className="nav-link active show" data-toggle="tab"
                                                       href="#order">Thông tin dịch vụ</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab"
                                                       href="#history">Lịch sử</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab"
                                                       href="#support">Hỗ trợ</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade active show" id="order" role="tabpanel">
                                                    <div className="p-t-15">
                                                        <form className="form-valide" id="order-form-main" onSubmit={this.handleFormSubmit}>
                                                            <div className="container p-4">
                                                                <div className="form-group row">
                                                                    <label className="col-lg-2 col-form-label"
                                                                           htmlFor="target">Links
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-10">
                                                                        <input type="text"
                                                                               className="form-control input-default"
                                                                               id="target"
                                                                               name="target" value={this.state.target}
                                                                               onChange={this.handleChangeInput}
                                                                               placeholder="Links"/>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-lg-2 col-form-label"
                                                                           htmlFor="target">Gói dịch vụ
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-5">
                                                                        {this.getPackageListSelect(items)}
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-lg-2 col-form-label"
                                                                           htmlFor="target">Số lượng
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-10">
                                                                        <input type="number"
                                                                               className="form-control input-default"
                                                                               id="qty"
                                                                               name="qty" value={this.state.qty}
                                                                               placeholder="Số lượng"
                                                                               onChange={this.handleChangeInput}/>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-lg-2 col-form-label"
                                                                           htmlFor="note">Ghi chú
                                                                    </label>
                                                                    <div className="col-lg-10">
                                                                        <textarea className="form-control" id="note"
                                                                                  name="note" rows="5"
                                                                                  placeholder="Ghi chú" value={this.state.note}
                                                                                  onChange={this.handleChangeInput}></textarea>
                                                                    </div>
                                                                </div>
                                                                {this.state.packageNote && (
                                                                    <div className="text-center">
                                                                        <hr/>
                                                                        <h5 className="card-title font-small">Ghi chú
                                                                            gói dịch vụ</h5>
                                                                        <div className="container">
                                                                            <p className="card-text"
                                                                               dangerouslySetInnerHTML={{__html: this.state.packageNote}}></p>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <hr/>
                                                                <div className="form-group row justify-content-center">
                                                                    <div className="stat-widget-one">
                                                                        <div className="stat-content">
                                                                            <div className="stat-text font-medium">
                                                                                <i className="fas fa-money-check-alt"></i> Giá
                                                                                trị đơn hàng
                                                                            </div>
                                                                            <div
                                                                                className="stat-digit gradient-4-text">{this.state.subtotal} VND
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <div className="col-lg-12 text-center">
                                                                        {this.getSubmitButton()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="history">
                                                    <div className="p-t-15">
                                                        <OrderHistory serviceId={this.props.params.id}/>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="support">
                                                    <div className="p-t-15">
                                                        Hỗ trợ
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
                <this.HooksData/>
                <FormValidateRule/>
            </div>
        );
    }
}

export default wrapper(OrderForm);