import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// import routes
import _routes from '../_routes';

// 
import '../style/content.css';


/**
 * Content Class Component
 */
export default class Content extends React.Component {
    render() {
        return <div class="content-wrapper">
            {_routes.map((route, idx) => {
                return route.view ? (
                    <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.view {...props} />
                    )} />
                ) : (null);
            })}
            <Redirect from="/" to="overview" />
        </div>
    }
}