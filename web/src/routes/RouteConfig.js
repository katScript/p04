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
import OrderForm from "components/client/order/OrderForm";
import CustomerInformation from "components/client/customer/CustomerInformation";
import Order from "components/admin/order/Order";
import User from "components/admin/user/User";

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
                <Route path="/admin" >
                    <Route index element={<Dashboard/>} />
                    <Route path="service">
                        <Route index element={<Service/>} />
                        <Route path="detail/:id?" element={<ServiceForm />} />
                    </Route>
                    <Route path="package">
                        <Route index element={<Package/>} />
                        <Route path="detail/:id?" element={<PackageForm/>} />
                    </Route>
                    <Route path="customer">
                        <Route index element={<Package/>} />
                        <Route path="payment" element={<PackageForm/>} />
                    </Route>
                    <Route path="order">
                        <Route index element={<Order/>} />
                    </Route>
                    <Route path="user">
                        <Route index element={<User/>} />
                    </Route>
                </Route>
                <Route path="/">
                    <Route index element={<Main/>}/>
                    <Route path="customer">
                        <Route index element={<CustomerInformation/>} />
                        <Route path="recharge" element={<CustomerInformation/>} />
                        <Route path="history" element={<CustomerInformation/>} />
                    </Route>
                    <Route path="place/order/service/:id" element={<OrderForm/>} />
                </Route>
            </Routes>
        );
    }
}

export default RouteConfig;