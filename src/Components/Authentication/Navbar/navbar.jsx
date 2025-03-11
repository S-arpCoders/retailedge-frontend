import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';


const Navbar = () => {
    return (
        <div className="area">
            <nav className="main-menu">
                <ul>
                  <li>
                    <Link to="/dashboard">
                      <i className="fa fa-home fa-2x"></i>
                      <span className="nav-text">Dashboard</span>
                    </Link>
                  </li>
                  <li className="has-subnav">
                    <Link to="/inventory">
                      <i className="fa fa-globe fa-2x"></i>
                      <span className="nav-text">Inventory</span>
                    </Link>
                  </li>
                    <li className="">
                        <Link to="/report">
                            <i className="fa fa-bar-chart"></i>
                            <span className="nav-text">Reports</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/suppliers">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">Suppliers</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/orders">
                            <i className="fa fa-film fa-2x"></i>
                            <span className="nav-text">orders</span>
                        </Link>
                    </li>

                </ul>

                <ul className="logout">

                    <li>
                        <a href="#"></a>
                        <i className="fa fa-sign-out fa-2x"></i>
                        <span className="nav-text">Settings</span>
                    </li>
                    <li>
                        <Link to="/Logout">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;



