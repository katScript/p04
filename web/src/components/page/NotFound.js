import React, {Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component {
    getHomepage = () => {
        return this.props.isAdmin ? "/admin" : "/";
    }

    render() {
        return (
            <div className="content-body d-flex">
                <div className="container align-items-center">
                    <div className="row justify-content-center h-100">
                        <div className="col-xl-6">
                            <div className="error-content">
                                <div className="card mb-0">
                                    <div className="card-body text-center">
                                        <h1 className="error-text text-primary">404</h1>
                                        <h4 className="mt-4"><i className="fa fa-thumbs-down text-danger"></i> Bad
                                            Request
                                        </h4>
                                        <p>Your Request resulted in an error.</p>
                                        <form className="mt-5 mb-5">

                                            <div className="text-center mb-4 mt-4">
                                                <Link to={this.getHomepage()} className="btn btn-primary">Go to Homepage</Link>
                                            </div>
                                        </form>
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

export default NotFound;