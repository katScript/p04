import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Header from "components/bar/Header";
import AdminSideBar from "components/bar/AdminSideBar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
    }

    staticContentImport = () => {
        this.staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
        this.staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
        this.staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
        this.staticContent.useBodyStaticScript("/plugins/fullcalendar/js/fullcalendar.min.js");
        this.staticContent.useBodyStaticScript("/js/plugins-init/fullcalendar-init.js");
    }

    render() {
        return (
            <div className="Dashboard">
                <Header/>
                <AdminSideBar/>
                <div className="content-body">

                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(Dashboard);