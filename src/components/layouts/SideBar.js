import React from 'react'
import { Toggle, Nav, NavItem } from 'reactstrap';
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
                <div>
                    {_routes.map((route, idx) => {
                        return route.view ? (
                            <a class="active">
                                <Link to={route.path}><i className="fa fa-desktop"></i>{route.name} </Link>
                            </a>
                        ) : (null);
                    })}
                </div>
            </nav>
        )
    }
}