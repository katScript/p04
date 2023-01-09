import RouteConfig from "routes/RouteConfig";
import React, {Component} from "react";
import './App.css';
import Header from "components/bar/Header";
import Loader from "components/common/Loader";
import SideBar from "components/bar/SideBar";
import AdminSideBar from "components/bar/AdminSideBar";
import {common} from "utils/common";

class App extends Component {
    constructor(props) {
        super(props);
        this.admin = JSON.parse(localStorage.getItem(common.userHashId.admin));
        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.user = JSON.parse(localStorage.getItem(common.userHashId.user));
    }

    getSideBar = () => {
        if (this.isAdmin())
            return (<AdminSideBar/>);

        return (<SideBar isLogin={this.isLogin()}/>);
    }

    isAdmin = () => {
        return this.admin !== null;
    }

    isLogin = () => {
        return this.user !== null;
    }

    render() {
        return (
            <div className="App">
                <Loader id={"preloader"}/>
                <div id="main-wrapper">
                    <Header/>
                    {this.getSideBar()}
                    <RouteConfig isAdmin={this.isAdmin()}
                                 isLogin={this.isLogin()}
                                 customer={this.customer}
                                 admin={this.admin}
                    />
                    <div className="footer">
                        <div className="copyright">
                            <p>Copyright © Developed by <a href="#">Kat</a> 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;