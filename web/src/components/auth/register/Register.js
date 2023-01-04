import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Header from "components/bar/Header";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import RegisterForm from "components/auth/register/RegisterForm";

class Register extends Component {
    staticContentImport = () => {
        const staticContent = this.props.staticContent;

        staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
        staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
        staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
        staticContent.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
        staticContent.useBodyStaticScript("/js/custom/fullcalendar.js");
    }

    render() {
        return (
            <div className="Register">
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
                                        <RegisterForm/>
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

export default wrapper(Register);