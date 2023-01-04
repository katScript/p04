import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import {Link} from "react-router-dom";
import { login } from "api/user/account";
import UserData from "models/user/user-data";
import LoginData from "models/user/login-data";
import Swal from 'sweetalert2';

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
        const {data} = await login(this.state);
        this.loginData.setObjectData(data);
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        try {

            this.getLoginResponse().then(() => {
                let role = this.loginData.roles,
                    id = this.loginData.id,
                    token = this.loginData.token;


                this.userData.setUserCookies(token);
                this.userData.getUserData()[role](id);
            });

            return Swal.fire({
                title: 'Good job!',
                text: 'You clicked the button.',
                icon: 'success'
            });
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    }

    render() {
        const { username, password } = this.state;
        const staticContent = this.props.staticContent;

        staticContent.useBodyStaticScript("/plugins/validation/jquery.validate.min.js");
        staticContent.useBodyStaticScript("/js/custom/validate.js");

        return (
            <div className="LoginForm">
                <div className="form-validation">
                    <form className="form-valide" onSubmit={this.handleFormSubmit}>
                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="username"
                                       name="username" placeholder="Username"
                                       value={username} onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="password" className="form-control" name="password"
                                       placeholder="Password"
                                       value={password} onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <span><Link to="/auth/register">Register</Link> now!</span>
                </div>
            </div>
        );
    }
}

export default wrapper(LoginForm);