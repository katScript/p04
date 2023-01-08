import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import SideBar from "components/bar/SideBar";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {getServiceById} from "api/order/service";
import {common} from "utils/common";
import Loader from "components/common/Loader";

class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.staticContent = this.props.staticContent;
        this.state = {
            service: {},
            items: [],
            target: "",
            qty: 0,
            note: "",
            packageId: "",
            packagePrice: 0,
            packageNote: "",
            subtotal: 0
        };
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        await this.setState({[name] : value});
        await this.handleChangePrice();
    }

    handleChangePrice = async () => {
        this.setState({
            subtotal: this.state.qty * this.state.packagePrice
        });
    }

    handleSelectPackage = async (event) => {
        let element = event.target,
            packageData = this.state.items[element.id];

        element.parentElement.childNodes.forEach((e) => {
            if (e && e.classList.contains("active-package")) {
                e.classList.remove("active-package");
            }
        });

        element.classList.add("active-package");
        await this.setState({
            packageId: packageData.id,
            packageNote: packageData.note,
            packagePrice: packageData.price
        });
        await this.handleChangePrice();
    }

    getServiceData = async (id) => {
        const {data} = await getServiceById(id);
        return data;
    }

    staticContentImport = () => {
        this.staticContent.useBodyStaticScript("/plugins/jqueryui/js/jquery-ui.min.js");
        this.staticContent.useStaticStyle("/plugins/fullcalendar/css/fullcalendar.min.css");
        this.staticContent.useBodyStaticScript("/plugins/moment/moment.min.js");
    }

    HooksData = () => {
        const params = this.props.params;
        useEffect(() => {
            common.loadScreen("#order-form-loader", "#order-form-main");
            this.getServiceData(this.props.params.id).then((r) => {
                this.setState({
                    service: r,
                    items: r.items,
                    packageNote: ""
                });
            });

        }, [params]);
    }

    render() {
        const service = this.state.service,
            items = this.state.items;

        return (
            <div className="OrderForm">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <Loader id={"order-form-loader"} />
                                <form className="form-valide" id="order-form-main">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title font-medium">
                                                {service.serviceName}
                                            </div>
                                            <hr/>
                                            <div className="container p-4">
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="target">Links
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input type="text" className="form-control input-default" id="target"
                                                               name="target" value={this.state.target} onChange={this.handleChangeInput}
                                                               placeholder="Links"/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="target">Package
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-5">
                                                        <div className="basic-list-group">
                                                            <ul className="list-group">
                                                                {items.map((e, i) => {
                                                                    return (
                                                                        <li key={e.id} id={i}
                                                                            className="list-group-item"
                                                                            onClick={this.handleSelectPackage}>
                                                                            {e.packageName} {e.status && <span
                                                                            className="badge badge-success">{e.status}</span>}
                                                                            <span
                                                                                className="label label-info float-right">{e.price} VND</span>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.packageNote && (
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <h5 className="card-title font-small">Package note</h5>
                                                <div className="container">
                                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: this.state.packageNote }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="container">
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="target">Quantity
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input type="number" className="form-control input-default" id="qty"
                                                               name="qty" value={this.state.qty} placeholder="Quantity" onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="note">Note
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <textarea className="form-control" id="note"
                                                                  name="note" rows="5"
                                                                  placeholder="Special note" value={this.state.note}
                                                                  onChange={this.handleChangeInput}></textarea>
                                                    </div>
                                                </div>

                                                <hr/>

                                                <div className="form-group row justify-content-center">
                                                    <div className="stat-widget-one">
                                                        <div className="stat-content">
                                                            <div className="stat-text font-medium">
                                                                <i className="fas fa-money-check-alt"></i> Subtotal
                                                            </div>
                                                            <div className="stat-digit gradient-4-text">{this.state.subtotal} VND</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <button type="submit"
                                                                className="btn btn-primary">Place order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <this.staticContentImport/>
                <this.HooksData/>
            </div>
        );
    }
}

export default wrapper(OrderForm);