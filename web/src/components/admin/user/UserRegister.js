import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {registerAdmin} from "api/admin/admin";
import Swal from "sweetalert2";
import {common} from "utils/common";

class UserRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
            fullName: "",
            phone: "",
            address: "",
            currentAddress: ""
        }
    }

    prepareBreadcrumb = () => {
        return [
            {
                active: false,
                label: "Dashboard",
                url: "/admin"
            },
            {
                active: true,
                label: "Admin",
                url: "#"
            }
        ];
    }

    registerAdminUser = async () => {
        await registerAdmin({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            adminData: {
                fullName: this.state.fullName,
                phone: this.state.phone,
                address: this.state.address,
                currentAddress: this.state.currentAddress
            },
        }).catch((e) => {throw e;});
    }

    handleChangeInput = async (event) => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.registerAdminUser().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Đăng ký quản trị viên thành công!',
                icon: 'success'
            }).then((r) => {
                common.redirect("/admin/user");
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Có lỗi sảy ra vui lòng thử lại sau!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        })
    }

    render() {
        return (
            <div className="UserRegister">
                <div className="content-body">
                    <Breadcrumb item={this.prepareBreadcrumb()}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title font-medium col-3">Đăng kí quản trị viên</h4>
                                        <hr/>
                                        <form className="form-valide" noValidate="novalidate" onSubmit={this.handleFormSubmit}>
                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="username">Username <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="text" className="form-control" id="username"
                                                           name="username" placeholder="Username"
                                                           value={this.state.username}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="password">Password <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="password" className="form-control" id="password"
                                                           name="password" placeholder="Password"
                                                           value={this.state.password}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="email">Email <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="email" className="form-control" id="email"
                                                           name="email"
                                                           placeholder="Email"
                                                           value={this.state.email}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="fullName">Họ và tên <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="text" className="form-control" id="fullName"
                                                           name="fullName"
                                                           placeholder="Full name"
                                                           value={this.state.fullName}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="phone">Số điện thoại <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="text" className="form-control" id="phone"
                                                           name="phone"
                                                           placeholder="Số điện thoại"
                                                           value={this.state.phone}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="address">Địa chỉ <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="text" className="form-control" id="address"
                                                           name="address"
                                                           placeholder="Địa chỉ"
                                                           value={this.state.address}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="currentAddress">Địa chỉ thường chú <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-7">
                                                    <input type="text" className="form-control" id="currentAddress"
                                                           name="currentAddress"
                                                           placeholder="Địa chỉ thường chú "
                                                           value={this.state.currentAddress}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <div className="col-lg-8">
                                                    <div className="float-right">
                                                        <button type="submit" className="btn btn-primary">Đăng ký
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default wrapper(UserRegister);