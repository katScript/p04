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
import Customer from "components/admin/customer/Customer";
import CustomerForm from "components/admin/customer/CustomerForm";
import NotFound from "components/page/NotFound";
import Recharge from "components/client/customer/Recharge";
import BillingAddressForm from "components/admin/user/BillingAddressForm";
import History from "components/client/customer/History";
import UserForm from "components/admin/user/UserForm";
import UserRegister from "components/admin/user/UserRegister";
import AdminOrderForm from "components/admin/order/AdminOrderForm";
import Payment from "components/admin/customer/payment/Payment";
import CardInfo from "components/admin/customer/payment/CardInfo";
import AdminBank from "components/admin/user/AdminBank";

class RouteConfig extends Component {
    constructor(props) {
        super(props);

        this.loginPath = "/auth/login";
        this.registerPath = "/auth/register";
    }

    getCustomerLoginRoute = () => {
        if (this.props.isLogin && this.props.customer != null)
            return (
                <Route path="customer" exact>
                    <Route index element={<CustomerInformation/>} />
                    <Route path="recharge" exact>
                        <Route index exact element={<Recharge />} />
                        <Route path="billing/:id?" exact element={<BillingAddressForm customerId={this.props.customer.id} />} />
                    </Route>
                    <Route path="history" exact element={<History />} />
                </Route>
            );

        return (<Route path="customer" element={<Login/>}/>);
    }

    render() {
        const isAdmin = this.props.isAdmin;
        return (
            <Routes>
                <Route path={this.loginPath} element={<Login/>} />
                <Route path={this.registerPath} element={<Register/>} />
                {isAdmin && (
                    <Route path="/admin" exact>
                        <Route index element={<Dashboard/>} />
                        <Route path="service">
                            <Route index exact element={<Service/>} />
                            <Route path="edit/:id?" exact element={<ServiceForm />} />
                        </Route>
                        <Route path="package" exact>
                            <Route index exact element={<Package/>} />
                            <Route path="edit/:id?" exact element={<PackageForm/>} />
                        </Route>
                        <Route path="customer" exact>
                            <Route index exact element={<Customer/>} />
                            <Route path=":id" exact element={<CustomerForm/> }/>
                            <Route path="payment" exact element={<Payment/>} />
                            <Route path="payment/:id" exact element={<CardInfo/>} />
                        </Route>
                        <Route path="order" exact>
                            <Route index exact element={<Order/>} />
                            <Route path="edit/:id" element={<AdminOrderForm/>} />
                        </Route>
                        <Route path="user" exact>
                            <Route index exact element={<User/>} />
                            <Route path="register/" element={<UserRegister/>} />
                            <Route path="edit/:id" element={<UserForm/>} />
                        </Route>
                        <Route path="bank" element={<AdminBank />} />
                        <Route path="bank/edit/:id?" exact element={<BillingAddressForm />} />
                    </Route>
                )}
                <Route path="/" exact>
                    <Route index element={<Main/>}/>
                    {this.getCustomerLoginRoute()}
                    <Route path="place/order/service/:id" exact element={<OrderForm/>} />
                </Route>
                <Route path='*' element={<NotFound isAdmin={isAdmin} />}/>
            </Routes>
        );
    }
}

export default RouteConfig;