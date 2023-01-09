import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getAdminById, saveAdminData} from "api/admin/admin";
import AdminData from "models/admin/admin-data";
import Swal from "sweetalert2";
import {common} from "utils/common";

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.params = this.props.params;
        this.adminData = new AdminData();
        this.state = {
            id: null,
            username: "",
            password: "",
            email: "",
            fullName: "",
            phone: "",
            address: "",
            currentAddress: ""
        }

        this.fetchAdminData(this.params.id).then((r) => {
            this.setState({
                id: r.id,
                username: r.username,
                email: r.email,
                fullName: r.fullName,
                phone: r.phone,
                address: r.address,
                currentAddress: r.currentAddress
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

    handleChangeInput = async (event) => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    fetchAdminData = async (id) => {
        const {data} = await getAdminById(id).catch((e) => {throw e;});
        return data;
    }

    saveAdminData = async () => {
        await saveAdminData(this.state).catch((e) => {throw e;});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.saveAdminData().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Lưu thông tin quản trị viên thành công!',
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
            <div className="UserForm">
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
                                                <label className="col-lg-1 col-form-label">Username</label>
                                                <label className="col-lg-7 col-form-label">{this.state.username}</label>
                                            </div>

                                            <div className="form-group row justify-content-center">
                                                <label className="col-lg-1 col-form-label"
                                                       htmlFor="password">Password <span
                                                    className="text-danger">*</span>
                                                </label>
                                                <div className="col-lg-5">
                                                    <input type="password" className="form-control" id="password"
                                                           name="password" placeholder="Password"
                                                           value={this.state.password}
                                                           onChange={this.handleChangeInput}/>
                                                </div>
                                                <div className="col-lg-2">
                                                    <button className="btn btn-primary">Thay đổi mật khẩu
                                                    </button>
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
                                                        <button type="submit" className="btn btn-primary">Lưu thông tin
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

export default wrapper(UserForm);