import React from "react";
import staticContent from "hooks/staticContent";
import { Routes ,Route } from 'react-router-dom';
import Login from "components/auth/login/Login";
import Register from "components/auth/register/Register";

function AuthMain() {
    staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
    staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
    staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
    staticContent.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
    staticContent.useBodyStaticScript("/js/custom/fullcalendar.js");

    return (
        <div className="AuthMain">
            <Routes>
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/register" element={<Register/>} />
            </Routes>
        </div>
    );
}

export default AuthMain;