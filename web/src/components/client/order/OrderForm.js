import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import SideBar from "components/bar/SideBar";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getServiceById} from "api/order/service";

class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.staticContent = this.props.staticContent;
        this.state = {
            service: {}
        };
    }

    getServiceData = async (id) => {
        const {data} = await getServiceById(id);
        return data;
    }

    staticContentImport = () => {
        this.staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
        this.staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
        this.staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
    }

    HooksData = () => {
        const params = this.props.params;
        useEffect(() => {
            this.getServiceData(this.props.params.id).then((r) => {
                this.setState({service: r});
            });

        }, [params]);
    }

    render() {
        const service = this.state.service;

        return (
            <div className="OrderForm">
                <SideBar/>
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            {service.serviceName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <this.staticContentImport/>
                <this.HooksData/>
            </div>
        );
    }
}

export default wrapper(OrderForm);