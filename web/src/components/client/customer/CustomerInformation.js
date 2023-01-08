import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import {getCustomerById} from "api/customer/customer";
import CustomerData from "models/customer/customer-data";

class CustomerInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            fullName: "",
            phone: "",
            email: "",
            currentMoney: "",
            totalMoney: "",
            username: ""
        }

        this.customerData = new CustomerData();

        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.fetchCustomerDataById(this.customer.id).then((r) => {
            this.customerData.setObjectData(r);
            this.customerData.saveLocalStorageData();

            const data = this.customerData.getObjectData();
            this.setState({
                id: data.id,
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                currentMoney: data.currentMoney,
                totalMoney: data.totalMoney,
                username: data.username
            });
        });
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    fetchCustomerDataById = async (id) => {
        const {data} = await getCustomerById(id);
        return data;
    }

    render() {
        return (
            <div className="CustomerInformation">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-title font-medium">
                                            {this.state.username}
                                        </div>
                                        <hr/>
                                        <div className="form-validation">
                                            <form className="form-valide" onSubmit={this.handleFormSubmit}>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="fullName">Họ và tên
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="fullName"
                                                               name="fullName" placeholder="Họ và tên"
                                                               value={this.state.fullName} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="phone">Số điện thoại
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="phone"
                                                               name="phone" placeholder="Số điện thoại"
                                                               value={this.state.phone} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="email">Email
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="email"
                                                               name="email" placeholder="Email"
                                                               value={this.state.email} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <button type="submit" className="btn btn-primary float-right">Lưu thông tin</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="h-100">
                                    <div className="col-lg-12 card gradient-1 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">Số tiền hiện tại</h3>
                                                <h2 className="text-white">{this.state.currentMoney} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="fas fa-wallet"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card gradient-7 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">Tổng tiền đã nạp</h3>
                                                <h2 className="text-white">{this.state.totalMoney} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="far fa-money-bill-alt"></i></span>
                                        </div>
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

export default wrapper(CustomerInformation);