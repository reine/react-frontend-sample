import React from 'react';
import ReactDOM from 'react-dom';

// Imports Assets Files
import 'font-awesome/css/font-awesome.min.css';

// Imports layout files
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SideBar from './components/layouts/SideBar';

// Imports content files
import Content from './components/content/Content';


// Renders React JS main page
ReactDOM.render(
    <div>
        <Header />
        <SideBar />
            <div class="content-wrapper">
                <Content />
            </div>
        <Footer />
    </div>
    , document.getElementById('root'));
