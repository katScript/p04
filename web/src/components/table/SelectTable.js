import React, {Component} from "react";
import wrapper from "components/app/wrapper";

class SelectTable extends Component {
    handleSelectElement = (event) => {
        const classList = event.currentTarget.classList,
              key = event.currentTarget.dataset.key,
              data = this.props.data[key];

        event.currentTarget.classList.toggle('active');
        this.props.handleChange(data, classList.contains('active'));
    }

    render() {
        const {label, data, keyData} = this.props;

        return (
            <div className="bootstrap-modal">
                <button type="button" className="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg">Select package
                </button>
                <div className="modal fade bd-example-modal-lg"
                     tabIndex="-1"
                     role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg select-model">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Package</h5>
                                <button type="button" className="close"
                                        data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            {label.map((item, i) => {
                                                return (<th key={i}>{item}</th>);
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((item, i) => {
                                            const itemsData = this.props.itemsData;
                                            let isActive = "";
                                            if (itemsData.find((data) => data.id === item.id))
                                                isActive = "active";

                                            return (
                                                <tr key={item.id} className={isActive} onClick={this.handleSelectElement} data-key={i} >
                                                    {keyData.map((k, j) => {
                                                        return (<td key={j}>{item[k]}</td>);
                                                    })}
                                                </tr>
                                            );

                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal">Close</button>
                                <button type="button"
                                        className="btn btn-primary">Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default wrapper(SelectTable);