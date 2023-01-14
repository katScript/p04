import React, {Component} from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import wrapper from "components/app/wrapper";
import {getServiceById, saveService} from "api/order/service";
import {getAllPackage} from "api/order/package";
import Swal from "sweetalert2";
import ServiceData from "models/order/service-data";
import PackageData from "models/order/package-data";
import SelectTable from "components/table/SelectTable";
import {common} from "utils/common";

class ServiceForm extends Component {
    constructor(props) {
        super(props);

        this.serviceData = new ServiceData();
        this.packageData = new PackageData();
        this.categoryOption = common.categoryOption();

        this.state = {
            id: null,
            category: "",
            serviceName: "",
            items: [],
            title: "Create new service",
            packageList: []
        }

        if (this.props.params.id) {
            this.getServiceDataById(this.props.params.id).then((r) => {
                this.setState({
                    id: r.id,
                    category: r.category,
                    serviceName: r.serviceName,
                    items: r.items,
                    title: `Update service "${r.serviceName}"`
                });
            });
        }

        this.getAllPackageData().then((r) => {
            this.setState({packageList: r});
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.serviceData.setObjectData(this.state);
        saveService(this.serviceData.getObjectData()).then(() => {
            Swal.fire({
                title: 'Good job!',
                text: 'You clicked the button.',
                icon: 'success'
            }).then((r) => {
                common.redirect("/admin/service")
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Something went wrong!'
            });
        });
    }

    handleChangeInput = async (event) => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    getServiceDataById = async (id) => {
        const {data} = await getServiceById(id);
        return data;
    }

    getAllPackageData = async () => {
        const {data} = await getAllPackage();
        let list = [];

        for (const item of Object.values(data)) {
            this.packageData.setObjectData(item);
            list.push(this.packageData.getObjectData());
        }

        return list;
    }

    staticContentImport = () => {
        const staticContent = this.props.staticContent;

        staticContent.useBodyStaticScript("/plugins/validation/jquery.validate.min.js");
        staticContent.useBodyStaticScript("/js/custom/validate.js");
    }

    handleSelectPackage = (data, isNew = false) => {
        let itemsList = this.state.items;

        if (isNew) {
            itemsList.push(data);
        } else {
            itemsList = itemsList.filter( function( obj ) {
                return obj.id !== data.id;
            });
        }

        this.setState({items: itemsList});
    }

    render() {
        const title = this.state.title,
            category = this.state.category,
            serviceName = this.state.serviceName,
            item = this.state.items;

        return (
            <div className="ServiceForm">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title font-medium col-8">{title}</h4>
                                        <hr/>
                                        <div className="form-validation">
                                            <form className="form-valide" onSubmit={this.handleFormSubmit}>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="serviceName">Tên dịch vụ
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="serviceName"
                                                               name="serviceName" placeholder="Tên dịch vụ"
                                                               value={serviceName} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="category">Loại dịch vụ
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-control" id="category" name="category" value={category} onChange={this.handleChangeInput}>
                                                            <option value="">Chọn loại dịch vụ</option>
                                                            {this.categoryOption.map((e,i) => {
                                                                return (<option key={i} value={e.value}>{e.label}</option>);
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <hr className="col-lg-10"/>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label" htmlFor="package">
                                                        <SelectTable label={this.packageData.getLabelList()}
                                                                     data={this.state.packageList}
                                                                     keyData={this.packageData.getTableKeyList()}
                                                                     handleChange={this.handleSelectPackage}
                                                                     itemsData={this.state.items}/>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <div className="basic-list-group">
                                                            <ul className="list-group">
                                                                {item.map((e) => {
                                                                    return (<li key={e.id} className="list-group-item">
                                                                        <span>
                                                                        {e.packageName} <span
                                                                            className="badge badge-success">{e.status}</span>
                                                                        </span>
                                                                    </li>);
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <button type="submit"
                                                                className="btn btn-primary float-right">Lưu
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(ServiceForm);