import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Imports pages
import Overview from './pages/Overview';
import AllContacts from './pages/AllContacts';
import MyGuide from './pages/MyGuide';

/**
 * Content Class Component
 */
export default class Content extends React.Component {
    render() {
        return <div class="content-wrapper">
            <Switch>
                <Route path="/overview" component={withRouter(Overview)}/>
                <Route path="/allcontacts" component={withRouter(AllContacts)}/>
                <Route path="/myguide" component={withRouter(MyGuide)}/>
            </Switch>
        </div>
    }
}