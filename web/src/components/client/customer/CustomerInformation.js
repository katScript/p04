import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import {getCustomerById, saveCustomerInfo} from "api/customer/customer";
import CustomerData from "models/customer/customer-data";
import Swal from "sweetalert2";
import FormValidateRule from "components/common/FormValidateRule";
import ChangePasswordModel from "../../admin/user/ChangePasswordModel";

class CustomerInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            fullName: "",
            phone: "",
            email: "",
            currentMoneyLabel: "",
            totalMoneyLabel: "",
            username: ""
        }

        this.customerData = new CustomerData();

        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.fetchCustomerDataById(this.customer.id).then((r) => {
            this.customerData.setObjectData(r);
            this.customerData.saveLocalStorageData();

            const data = this.customerData.getObjectData();
            this.setState({
                id: data.id,
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                currentMoneyLabel: data.currentMoney,
                totalMoneyLabel: data.totalMoney,
                subscription: false,
                username: data.username
            });
        });
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    fetchCustomerDataById = async (id) => {
        const {data} = await getCustomerById(id);
        return data;
    }

    saveCustomer = async () => {
        await saveCustomerInfo(this.state);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.saveCustomer().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Lưu thông tin khách hàng thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                common.redirect("/customer");
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: "Có lỗi sảy ra vui lòng thử lại sau!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        });
    }

    render() {
        return (
            <div className="CustomerInformation">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="card-title font-medium col-lg-3">
                                                {this.state.username}
                                            </div>
                                            <div className="col-lg-9">
                                                <ChangePasswordModel username={this.state.username}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-validation">
                                            <form className="customer-information" onSubmit={this.handleFormSubmit}>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="fullName">Họ và tên
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="fullName"
                                                               name="fullName" placeholder="Họ và tên"
                                                               value={this.state.fullName} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="phone">Số điện thoại
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="phone"
                                                               name="phone" placeholder="Số điện thoại"
                                                               value={this.state.phone} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="email">Email
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="email"
                                                               name="email" placeholder="Email"
                                                               value={this.state.email} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <button type="submit" className="btn btn-primary float-right">Lưu thông tin</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <FormValidateRule form=".customer-information" />
                                    <FormValidateRule form=".password-account" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="h-100">
                                    <div className="col-lg-12 card gradient-1 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">Số tiền hiện tại</h3>
                                                <h2 className="text-white">{this.state.currentMoneyLabel} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="fas fa-wallet"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card gradient-7 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">Tổng tiền đã nạp</h3>
                                                <h2 className="text-white">{this.state.totalMoneyLabel} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="far fa-money-bill-alt"></i></span>
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

export default wrapper(CustomerInformation);