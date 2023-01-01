import React from "react";
import staticContent from "hooks/staticContent";
import Header from "components/nav/Header";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import RegisterForm from "components/auth/register/RegisterForm";

function Register() {
    staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
    staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
    staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
    staticContent.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
    staticContent.useBodyStaticScript("/js/plugins-init/fullcalendar-init.js");

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
        </div>
    );
}

export default Register;