import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import Loader from "components/common/Loader";
import {
    deleteCustomerBillingAddress,
    getCustomerBillingAddress,
    saveCustomerBillingAddress
} from "api/customer/customer";
import Swal from "sweetalert2";

class BillingAddressForm extends Component {
    constructor(props) {
        super(props);
        this.billingId = this.props.params.id;
        this.customerId = this.props.customerId;

        this.state = {
            id: null,
            customerId: this.customerId,
            type: "",
            billingName: "",
            holder: "",
            accountNumber: "",
            address: ""
        }

        this.billingOption = common.billingOption();
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        await this.setState({[name] : value});
    }

    isNew = () => {
        return this.state.id === null;
    }

    fetchBillingId = async (customerId, billingId) => {
        const {data} = await getCustomerBillingAddress(customerId, billingId);
        return data;
    }

    deleteBilling = async (customerId, billingId) => {
        await deleteCustomerBillingAddress(customerId, billingId);
    }

    saveResponse = async () => {
        try {
            await saveCustomerBillingAddress(this.customerId, this.state);
        } catch (e) {
            throw e;
        }
    }

    handleDeleteClick = () => {
        this.deleteBilling(this.customerId, this.billingId).then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Xóa phương thức thanh toán thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                common.redirect("/customer/recharge");
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

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.saveResponse().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Lưu phương thức thanh toán thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                common.redirect("/customer/recharge");
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

    HooksData = () => {
        const params = this.props.params;
        useEffect(() => {
            common.loadScreen("#billing-form-loader", "#billing-form-main");
            if (this.billingId) {
                this.fetchBillingId(this.customerId, this.billingId).then((r) => {
                    this.setState({
                        id: r.id,
                        type: r.type,
                        billingName: r.billingName,
                        holder: r.holder,
                        accountNumber: r.accountNumber,
                        address: r.address
                    });
                });
            }
        }, [params]);
    }

    render() {
        return (
            <div className="Recharge">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <Loader id={"billing-form-loader"} />
                                <form className="form-valide" id="billing-form-main" onSubmit={this.handleFormSubmit}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="card-title font-medium col-lg-9">
                                                    {this.isNew() ? "Thêm phương thức thanh toán" : this.state.billingName}
                                                </div>
                                                {!this.isNew() && (
                                                    <span className="col-lg-3">
                                                        <button className="btn btn-danger float-right" onClick={this.handleDeleteClick}>Xóa</button>
                                                    </span>
                                                )}
                                            </div>
                                            <hr/>
                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-4 col-form-label"
                                                       htmlFor="billingName">Ngân hàng / Tên thanh toán <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input type="text" className="form-control" id="billingName"
                                                           name="billingName" value={this.state.billingName} onChange={this.handleChangeInput}
                                                           placeholder="Nhập tên ngân hàng hoặc tên hình thức.."/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-4 col-form-label" htmlFor="type">Hình thức thanh toán <span className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <select className="form-control" id="type" name="type" value={this.state.type} onChange={this.handleChangeInput}>
                                                        <option value="">Chọn hình thức thanh toán</option>
                                                        {this.billingOption.map((e, i) => {
                                                            return (<option key={i} value={e.value}>{e.label}</option>);
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-4 col-form-label"
                                                       htmlFor="holder">Chủ thẻ <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input type="text" className="form-control" id="holder"
                                                           name="holder" value={this.state.holder} onChange={this.handleChangeInput}
                                                           placeholder="Nhập tên chủ thẻ"/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-4 col-form-label"
                                                       htmlFor="accountNumber">STK <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input type="text" className="form-control" id="accountNumber"
                                                           name="accountNumber" value={this.state.accountNumber} onChange={this.handleChangeInput}
                                                           placeholder="Nhập STK"/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-4 col-form-label"
                                                       htmlFor="address">Địa chỉ
                                                </label>
                                                <div className="col-lg-6">
                                                    <input type="text" className="form-control" id="address"
                                                           name="address" value={this.state.address} onChange={this.handleChangeInput}
                                                           placeholder="Nhập địa chỉ"/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <div className="col-lg-10">
                                                    <button type="submit" className="btn btn-primary float-right">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <this.HooksData/>
            </div>
        );
    }
}

export default wrapper(BillingAddressForm);