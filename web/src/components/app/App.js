import './App.css';
import usePublicStyle from 'src/hooks/usePublicStyle';
// import {useState} from 'react';

export default function App(props) {
    // const name = 'Company Name';
    // const [terms, setTerms] = useState([]);
    usePublicStyle("/plugins/pg-calendar/css/pignose.calendar.min.css");
    usePublicStyle("/plugins/chartist/css/chartist.min.css");
    usePublicStyle("/plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css");

    return (
        <div className="App">
            Ok! Let's go.
        </div>
    );
}