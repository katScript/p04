import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import {Link} from "react-router-dom";
import { login } from "api/user/account";
import UserData from "models/user/user-data";
import LoginData from "models/user/login-data";
import Swal from 'sweetalert2';
import {common} from "utils/common";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.loginData = new LoginData();
        this.userData = new UserData();

        this.state = {
            username: "",
            password: ""
        };
    }

    getLoginResponse =  async () => {
        try {
            const {data} = await login(this.state);
            this.loginData.setObjectData(data);
        } catch (e) {
            throw e;
        }
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.getLoginResponse().then(() => {
            this.userData.removeUserData();
            let role = this.loginData.roles,
                id = this.loginData.id,
                token = this.loginData.token;

            this.userData.setUserCookies(token);
            const url = this.userData.getUserData(id)[role]();

            return Swal.fire({
                title: 'Welcome!',
                text: 'Đăng nhập thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                common.redirect(url);
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Tên đăng nhập hoặc mật khẩu không đúng!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        });
    }

    staticContentImport = () => {
        const staticContent = this.props.staticContent;

        staticContent.useBodyStaticScript("/plugins/validation/jquery.validate.min.js");
        staticContent.useBodyStaticScript("/js/custom/validate.js");
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="LoginForm">
                <div className="form-validation">
                    <form className="form-valide" onSubmit={this.handleFormSubmit}>
                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="username"
                                       name="username" placeholder="Tên đăng nhập"
                                       value={username} onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="password" className="form-control" name="password"
                                       placeholder="Mật khẩu"
                                       value={password} onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <span className="d-flex justify-content-center">
                                    <Link to="/auth/register">Đăng kí </Link> <span> ngay!</span>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(LoginForm);