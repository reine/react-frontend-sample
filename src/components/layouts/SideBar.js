import React from 'react'
import { Link } from 'react-router-dom';

// import routes
import _routes from '../_routes';

// import bootstrap 4
import '../style/sidebar.css';

/**
 * SideBar Class Component
 */
export default class SideBar extends React.Component {
    render() {
        return (
            <nav className="sidenav">
                <ul>
                {_routes.map((route, idx) => {

                    if (route.sublink) {
                        return (<li class="active">
                            <Link to={route.path}>{route.icon} {route.name} </Link>
                            <ul>
                                {route.sublink.map((subroute, idx) => {
                                    return (<li>
                                        <Link to={subroute.path}>{subroute.icon} {subroute.name} </Link>
                                    </li>)
                                })}
                            </ul>
                        </li>)
                    } else {
                        return route.view ? (
                            <Link to={route.path}>{route.icon} {route.name} </Link>
                        ) : (null);
                    }
                })}
                </ul>
            </nav>
        )
    }
}