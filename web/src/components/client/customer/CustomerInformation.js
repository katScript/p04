import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import SideBar from "components/bar/SideBar";
import Breadcrumb from "../../breadcrumb/Breadcrumb";

class CustomerInformation extends Component {
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
            <div className="CustomerInformation">
                <SideBar/>
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            CustomerInformation
                                        </div>
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

export default wrapper(CustomerInformation);