import React, {Component, useEffect} from "react";
import Swal from "sweetalert2";
import {common} from "utils/common";
import {changePassword} from "api/user/account";
import UserData from "models/user/user-data";

class ChangePasswordModel extends Component {
    constructor(props) {
        super(props);

        this.userData = new UserData();
        this.state = {
            username: "",
            password: "",
            newPassword: ""
        }
    }

    HooksData = () => {
        let data = this.props.username;

        useEffect(() => {
            this.setState({
                username: data
            });
        }, [data]);
    }

    changeCustomerPassword = async () => {
        await changePassword({
            userName: this.state.username,
            currentPassword: this.state.password,
            newPassword: this.state.newPassword
        });
    }


    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    handleChangePasswordSubmit = (e) => {
        e.preventDefault();
        this.changeCustomerPassword().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Thay đổi mật khẩu thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                this.userData.removeUserData();
                common.redirect("/auth/login");
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
            <div className="ChangePasswordModel">
                <div className="bootstrap-modal">
                    <button type="button" className="btn btn-primary float-right" data-toggle="modal"
                            data-target="#password-model">Đổi mật khẩu
                    </button>
                    <div className="modal fade" id="password-model"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered custom-model" role="document">
                            <div className="modal-content">
                                <form className="password-account" onSubmit={this.handleChangePasswordSubmit}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Đổi mật khẩu</h5>
                                        <button type="button" className="close"
                                                data-dismiss="modal"><span>×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group row justify-content-center">
                                            <label className="col-lg-2 col-form-label"
                                                   htmlFor="password">Mật khẩu hiện tại
                                            </label>
                                            <div className="col-lg-8">
                                                <input type="password" className="form-control" id="password"
                                                       name="password" placeholder="Mật khẩu hiện tại"
                                                       value={this.state.password} onChange={this.handleChangeInput}/>
                                            </div>
                                        </div>
                                        <div className="form-group row justify-content-center">
                                            <label className="col-lg-2 col-form-label"
                                                   htmlFor="newPassword">Mật khẩu mới
                                            </label>
                                            <div className="col-lg-8">
                                                <input type="password" className="form-control" id="newPassword"
                                                       name="newPassword" placeholder="Mật khẩu mới"
                                                       value={this.state.newPassword} onChange={this.handleChangeInput}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng
                                        </button>
                                        <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
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

export default ChangePasswordModel;