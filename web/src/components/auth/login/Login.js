import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Header from "components/bar/Header";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import LoginForm from "components/auth/login/LoginForm";

class Login extends Component {
    staticContentImport = () => {
        let sc = this.props.staticContent;

        sc.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
        sc.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
        sc.useBodyStaticScript("/plugins/moment/moment.min.js");
        sc.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
        sc.useBodyStaticScript("/js/custom/fullcalendar.js");
    }

    render() {
        return (
            <div className="Login">
                <Header/>
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="text-center pt-4">
                                        <span className="display-5"><i className="icon-user gradient-4-text"></i></span>
                                    </div>
                                    <div className="card-body">
                                        <LoginForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(Login);