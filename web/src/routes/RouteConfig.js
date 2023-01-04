import React, {Component} from "react";
import { Routes ,Route } from 'react-router-dom';
import Login from "components/auth/login/Login";
import Register from "components/auth/register/Register";
import Dashboard from "components/admin/dashboard/Dashboard";
import Service from "components/admin/service/Service";
import ServiceForm from "components/admin/service/ServiceForm";
import Package from "components/admin/package/Package";
import PackageForm from "components/admin/package/PackageForm";
import Main from "components/client/main/Main";

class RouteConfig extends Component {
    constructor(props) {
        super(props);

        this.loginPath = "/auth/login";
        this.registerPath = "/auth/register";
    }

    staticRoute = () => {
        return [this.loginPath, this.registerPath];
    }

    render() {
        return (
            <Routes>
                <Route path={this.loginPath} element={<Login/>} />
                <Route path={this.registerPath} element={<Register/>} />
                <Route path="/admin/" element={<Dashboard/>} />
                <Route path="/admin/service" element={<Service/>} />
                <Route path="/admin/package" element={<Package/>} />
                <Route path="/admin/service/detail/:id?" element={<ServiceForm />} />
                <Route path="/admin/package/detail/:id?" element={<PackageForm/>} />
                <Route path="/" element={<Main/>} />
            </Routes>
        );
    }
}

export default RouteConfig;