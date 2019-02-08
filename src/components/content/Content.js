import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Imports pages
import Overview from './pages/Overview';
import AllContacts from './pages/AllContacts';
import MyGuide from './pages/MyGuide';
import FollowUp from './pages/FollowUp';


/**
 * Content Class Component
 */
export default class Content extends React.Component {
    render() {
        return <div class="content-wrapper">
            <Switch>
                <Route path="/overview" component={withRouter(Overview)}/>
                <Route path="/all-contacts" component={withRouter(AllContacts)}/>
                <Route path="/my-guide" component={withRouter(MyGuide)}/>
                <Route path="/follow-up" component={withRouter(FollowUp)}/>
            </Switch>
        </div>
    }
}