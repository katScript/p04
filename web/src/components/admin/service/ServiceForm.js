import React, {Component} from "react";
import Header from "components/bar/Header";
import SideBar from "components/bar/SideBar";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import wrapper from "components/app/wrapper";

class ServiceForm extends Component {

    render() {
        return (
            <div className="ServiceForm">
                <Header/>
                <SideBar/>
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
                                        ID: {this.props.params.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default wrapper(ServiceForm);