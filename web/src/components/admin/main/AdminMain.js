import React from "react";
import staticContent from "hooks/staticContent";

function AdminMain() {
    staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
    staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
    staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
    staticContent.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
    staticContent.useBodyStaticScript("/js/plugins-init/fullcalendar-init.js");

    return (
        <div className="ClientMain">
            <h1>Admin</h1>
        </div>
    );
}

export default AdminMain;