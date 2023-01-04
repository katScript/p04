import React, {Component} from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {registerCustomer} from "api/customer/customer";
import RegisterData from "models/customer/register-data";
import wrapper from "components/app/wrapper";

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.registerData = new RegisterData();

        this.state = {
            username: "",
            password: "",
            fullname: "",
            email: "",
            confirmPassword: "",
            phone: ""
        };
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    registerResponse = async () => {
        this.registerData.bindObjectData(this.state);
        await registerCustomer(this.registerData.getObjectData());
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        try {
            this.registerResponse().then(() => {
                return Swal.fire({
                    title: 'Good job!',
                    text: 'You clicked the button.',
                    icon: 'success'
                }).then(r => {
                });
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
        const {username, password, fullname, email, confirmPassword, phone} = this.state;
        const staticContent = this.props.staticContent;

        staticContent.useBodyStaticScript("/plugins/validation/jquery.validate.min.js");
        staticContent.useBodyStaticScript("/js/custom/validate.js");


        return (
            <div className="RegisterForm">
                <div className="form-validation">
                    <form className="form-valide" onSubmit={this.handleFormSubmit}>
                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="fullname"
                                       name="fullname" placeholder="Your name" value={fullname}
                                       onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="username"
                                       name="username" placeholder="Username" value={username}
                                       onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="email" name="email"
                                       placeholder="Email" value={email} onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="password" className="form-control" id="password" name="password"
                                       placeholder="Password" value={password} onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="password" className="form-control" id="confirmPassword"
                                       name="confirmPassword" placeholder="Confirm password" value={confirmPassword}
                                       onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="phone" name="phone"
                                       placeholder="(+84) Phone number" value={phone} onChange={this.handleChangeInput}/>
                            </div>
                        </div>

                        <div className="form-group row justify-content-center">
                            <div className="col-lg-8">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                    <span><Link to="/auth/login">Login</Link></span>
                </div>
            </div>
        );
    }
}

export default wrapper(RegisterForm);