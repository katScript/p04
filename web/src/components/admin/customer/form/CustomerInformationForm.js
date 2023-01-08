import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";

class CustomerInformationForm extends Component {
    constructor(props) {
        super(props);
        this.staticContent = this.props.staticContent;
        this.state = {
            id: "",
            fullName: "",
            phone: "",
            email: "",
            subscription: "",
            currentMoney: "",
            totalMoney: "",
        }
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
             this.setState({
                 id: data.id,
                 fullName: data.fullName,
                 phone: data.phone,
                 email: data.email,
                 subscription: data.subscription,
                 currentMoney: data.currentMoney,
                 totalMoney: data.totalMoney,
            });
        }, [data]);
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    render() {
        return (
            <div className="CustomerInformationForm">
                <div className="container">
                    <form className="form-valide" action="#" method="post" noValidate="novalidate">
                        <div className="form-group row">
                            <label className="col-lg-4 col-form-label" htmlFor="fullName">Customer name <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="fullName" name="fullName"
                                       placeholder="Customer name" value={this.state.fullName} onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-4 col-form-label" htmlFor="phone">Phone number <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="phone" name="phone"
                                       placeholder="Phone number" value={this.state.phone} onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-4 col-form-label" htmlFor="email">Email <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="email" name="email"
                                       placeholder="Email" value={this.state.email} onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-8 ml-auto">
                                <button type="submit" className="btn btn-primary">Save customer</button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="stat-widget-one col-lg-6 col-form-label">
                                <div className="stat-content">
                                    <div className="stat-text">Current Money</div>
                                    <div className="stat-digit gradient-3-text">{this.state.currentMoney} VND</div>
                                </div>
                            </div>
                            <div className="stat-widget-one col-lg-6 col-form-label">
                                <div className="stat-content">
                                    <div className="stat-text">Total Money</div>
                                    <div className="stat-digit gradient-1-text">{this.state.totalMoney} VND</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <this.HooksData/>
            </div>
        );
    }
}

export default wrapper(CustomerInformationForm);