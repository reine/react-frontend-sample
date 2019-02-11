import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';


// Test Codes
import Content from './content/Content';
import SideBar from './layouts/SideBar';

/**
 * Application Class Component
 */
export default class App extends React.Component {

    loading = () => <div>Loading Page....</div>

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <div className="app">
            <div className="main-wrapper">
                <SideBar />
                
                <Suspense fallback={this.loading()}>
                    <Switch>
                        <Content />
                    </Switch>
                </Suspense>
            </div>
        </div>
    }
}