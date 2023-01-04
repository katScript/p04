import React, {Component} from "react";
import Header from "components/bar/Header";
import SideBar from "components/bar/SideBar";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

class Service extends Component {
    render() {
        return (
            <div className="Service">
                <Header/>
                <SideBar/>
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>Test</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ServiceHooks/>
            </div>
        );
    }
}

function ServiceHooks() {
}

export default Service;