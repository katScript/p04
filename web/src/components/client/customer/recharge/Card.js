import React, {Component} from "react";
import {common} from "utils/common";
import Swal from "sweetalert2";
import {saveCustomerBillingCard} from "api/customer/customer";

class Card extends Component {
    constructor(props) {
        super(props);

        this.customerId = this.props.customerId;
        this.hostOption = common.hostOption();
        this.state = {
            id: null,
            customerId: this.customerId,
            code: "",
            seri: "",
            value: "",
            host: ""
        }
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        await this.setState({[name] : value});
    }

    saveResponse = async () => {
        try {
            await saveCustomerBillingCard(this.customerId, this.state);
        } catch (e) {
            throw e;
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.saveResponse().then(() => {
            return Swal.fire({
                title: 'Thành công!',
                text: 'Gửi thông tin thanh toán thành công!',
                icon: 'success',
                confirmButtonText: 'Đóng',
            }).then(r => {
                common.redirect("/customer/recharge");
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Có lỗi sảy ra vui lòng thử lại sau!",
                confirmButtonText: 'Đóng',
            }).then(r => {
            });
        });
    }

    render() {
        return (
            <div className="Card">
                <form className="form-valide" id="billing-form-main" onSubmit={this.handleFormSubmit}>
                    <div className="form-group row justify-content-center">
                        <label className="col-lg-4 col-form-label" htmlFor="host">Nhà mạng <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                            <select className="form-control" id="host" name="host" value={this.state.host} onChange={this.handleChangeInput}>
                                <option value="">Chọn nhà mạng</option>
                                {this.hostOption.map((e, i) => {
                                    return (<option key={i} value={e.value}>{e.label}</option>);
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <label className="col-lg-4 col-form-label" htmlFor="value">Mệnh giá <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                            <select className="form-control" id="value" name="value" value={this.state.value} onChange={this.handleChangeInput}>
                                <option value="">Chọn mệnh giá</option>
                                <option value="10000">10,000 VND</option>
                                <option value="20000">20,000 VND</option>
                                <option value="50000">50,000 VND</option>
                                <option value="100000">100,000 VND</option>
                                <option value="500000">500,000 VND</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <label className="col-lg-4 col-form-label"
                               htmlFor="seri">Serial <span
                            className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" id="seri"
                                   name="seri" value={this.state.seri} onChange={this.handleChangeInput}
                                   placeholder="Nhập số serial"/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <label className="col-lg-4 col-form-label"
                               htmlFor="code">Mã thẻ <span
                            className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" id="code"
                                   name="code" value={this.state.code} onChange={this.handleChangeInput}
                                   placeholder="Mã thẻ"/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-lg-10">
                            <button type="submit" className="btn btn-primary float-right">Xác nhận</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Card;