import React from 'react'



export default class SideBar extends React.Component {
    render() {
        return <aside class="main-sidebar">
            <section class="sidebar">
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="https://yt3.ggpht.com/-Ql0j_AFbv-o/AAAAAAAAAAI/AAAAAAAAAAA/ZEUmJml7OgA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" class="img-circle" alt="User Image" />
                    </div>
                    <div class="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
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
                            <li><a href="../charts/morris.html"><i class="fa fa-circle-o"></i> All Contacts</a></li>
                            <li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> My Guide</a></li>
                            <li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Follow-Ups</a></li>
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