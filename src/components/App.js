import React from 'react';
import ReactDOM from 'react-dom';

// Imports Assets Files
import 'font-awesome/css/font-awesome.min.css';

// Imports layout files
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SideBar from './layouts/SideBar';
import Content from './content/Content';


/**
 * Application Class Component
 */
export default class App extends React.Component {
    render() {
        return <div class="wrapper">
            <Header />
            <SideBar />
            <Content />
            <Footer />
        </div>
    }
}