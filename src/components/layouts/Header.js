import React from 'react';
import { Link } from 'react-router-dom'

/**
 * Header Class Component
 */
export default class Header extends React.Component {
    render() {
        return <header class="main-header">
            <Link to="/overview" class="logo">
                <span class="logo-mini"><b>Y</b>FP</span>
                <span class="logo-lg"><b>Member</b>YFP</span>
            </Link>
            <nav class="navbar navbar-static-top">
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown messages-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>
                                <span class="label label-success">4</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">You have 4 messages</li>
                                <li>
                                    <ul class="menu">
                                        <li>
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="https://yt3.ggpht.com/-Ql0j_AFbv-o/AAAAAAAAAAI/AAAAAAAAAAA/ZEUmJml7OgA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" class="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    Support Team
                                                    <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                      
                                    </ul>
                                </li>
                                <li class="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="https://yt3.ggpht.com/-Ql0j_AFbv-o/AAAAAAAAAAI/AAAAAAAAAAA/ZEUmJml7OgA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" class="user-image" alt="User Image" />
                                <span class="hidden-xs">Alexander Pierce</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-header">
                                    <img src="https://yt3.ggpht.com/-Ql0j_AFbv-o/AAAAAAAAAAI/AAAAAAAAAAA/ZEUmJml7OgA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" class="img-circle" alt="User Image" />
                                    <p>
                                        Alexander Pierce - Web Developer
                                        <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
                                <li class="user-body">
                                    <div class="row">
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Followers</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Sales</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Friends</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    }
}