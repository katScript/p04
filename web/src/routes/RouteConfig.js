import React, {Component} from "react";
import { Routes ,Route } from 'react-router-dom';
import Login from "components/auth/login/Login";
import Register from "components/auth/register/Register";

class RouteConfig extends Component {
    constructor(props) {
        super(props);

        this.loginPath = "/auth/login";
        this.registerPath = "/auth/register";
    }

    staticRoute = () => {
        return [this.loginPath, this.registerPath];
    }

    isStaticRoute = (path) => {
        return this.staticRoute().includes(path);
    }

    render() {
        return (
            <Routes>
                <Route path={this.loginPath} element={<Login/>} />
                <Route path={this.registerPath} element={<Register/>} />
                <Route path="/" element={<Register/>} />
            </Routes>
        );
    }
}

export default RouteConfig;