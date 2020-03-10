import React from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from './components/navbar';
import MyJumbotron from './components/jumbotron';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

const Home = (props) => {
    return (
        <>
        <MyNavbar />
        <MyJumbotron />
        </>
    );
}

ReactDOM.render(<Home />, document.querySelector("#root"));
