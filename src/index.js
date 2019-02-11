import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import Application Component
import App from './components/App';

// import bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';


// Renders React JS main page
ReactDOM.render(
    <BrowserRouter>
        <Route render={({ location, history }) => (
            <App />
        )} />
    </BrowserRouter>
    , document.getElementById('root'));
