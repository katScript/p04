import RouteConfig from "routes/RouteConfig";
import React, {Component} from "react";
import './App.css';
import Header from "components/bar/Header";
import Loader from "components/common/Loader";
import SideBar from "components/bar/SideBar";
import AdminSideBar from "../bar/AdminSideBar";

class App extends Component {
    // const name = 'Company Name';
    // const [terms, setTerms] = useState([]);
    constructor(props) {
        super(props);
        this.admin = JSON.parse(localStorage.getItem("admin"));
        this.customer = JSON.parse(localStorage.getItem("customer"));
    }

    render() {
        return (
            <div className="App">
                <Loader id={"preloader"}/>
                <div id="main-wrapper">
                    <Header/>
                    <AdminSideBar/>
                    <RouteConfig/>
                </div>
                <AppHooks/>
            </div>
        );
    }
}

function AppHooks() {
}

export default App;