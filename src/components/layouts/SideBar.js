import React from 'react'
import { Link } from 'react-router-dom'


/**
 * SideBar Class Component
 */
export default class SideBar extends React.Component {
    render() {
        return <aside class="main-sidebar">
            <section class="sidebar">
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-files-o"></i>
                            <span>Inbox</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                                <span class="label label-primary pull-right">4</span>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="../layout/top-nav.html"><i class="fa fa-circle-o"></i> Email</a></li>
                            <li><a href="../layout/boxed.html"><i class="fa fa-circle-o"></i> Private Messaging</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="../widgets.html">
                            <i class="fa fa-th"></i> <span>Opportunities</span>
                        </a>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-pie-chart"></i>
                            <span>Contacts</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><Link to="/overview"><i class="fa fa-circle-o"></i> Overview</Link></li>
                            <li><Link to="/allcontacts"><i class="fa fa-circle-o"></i> All Contacts</Link></li>
                            <li><Link to="/myguide"><i class="fa fa-circle-o"></i> My Guide</Link></li>
                            <li><Link to="../charts/inline.html"><i class="fa fa-circle-o"></i> Follow-Ups</Link></li>
                        </ul>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-laptop"></i>
                            <span>Tasks</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="../UI/timeline.html"><i class="fa fa-circle-o"></i> My Tasks</a></li>
                            <li><a href="../UI/modals.html"><i class="fa fa-circle-o"></i> Va Tasks</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    }
}