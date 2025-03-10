import React from 'react';
import './navbar.css';


const Navbar = () => {
    return (
        <div className="area">
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="https://jbfarrow.com">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-globe fa-2x"></i>
                            <span className="nav-text">Inventory</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-bar-chart"></i>
                            <span className="nav-text">Reports</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-film fa-2x"></i>
                            <span className="nav-text">orders</span>
                        </a>
                    </li>




                </ul>

                <ul className="logout">

                    <li>
                        <a href="#"></a>
                        <i className="fa fa-sign-out fa-2x"></i>
                        <span className="nav-text">Settings</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;



