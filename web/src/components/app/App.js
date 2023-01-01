import './App.css';
import RouteConfig from "routes/RouteConfig";
import React, {Component} from "react";
import {Navigate} from "react-router-dom";

class App extends Component {
    // const name = 'Company Name';
    // const [terms, setTerms] = useState([]);
    constructor(props) {
        super(props);
        this.admin = JSON.parse(localStorage.getItem("admin"));
        this.customer = JSON.parse(localStorage.getItem("customer"));

        this.routeConfig = new RouteConfig();
    }

    render() {
        return (
            <div className="App">
                <div id="preloader">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                        </svg>
                    </div>
                </div>
                <div id="main-wrapper">
                    <RouteConfig/>
                </div>
            </div>
        );
    }
}

export default App;