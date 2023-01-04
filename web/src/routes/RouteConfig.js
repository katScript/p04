import React, {Component} from "react";
import { Routes ,Route } from 'react-router-dom';
import Login from "components/auth/login/Login";
import Register from "components/auth/register/Register";
import Dashboard from "components/admin/dashboard/Dashboard";
import Service from "components/admin/service/Service";
import ServiceForm from "components/admin/service/ServiceForm";

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
                <Route path="/admin" element={<Dashboard/>} />
                <Route path="/admin/service" element={<Service/>} />
                <Route path="/admin/service/detail/:id?" element={<ServiceForm />} />
                <Route path="/" element={<Register/>} />
            </Routes>
        );
    }
}

export default RouteConfig;