import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav
            className={`sidebar ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ul className="menu">
                <li className="selected">
                    <Link to="/" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="text">vals</div>
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="text">Dashboard</div>
                    </Link>
                </li>

                <li>
                    <Link to="/reports" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                        </div>
                        <div className="text">Reports</div>
                    </Link>
                </li>

                <li>
                    <Link to="/inventory" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-globe fa-2x"></i>
                        </div>
                        <div className="text">Inventory</div>
                    </Link>
                </li>

                <li>
                    <Link to="/supplies" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-area-chart" aria-hidden="true"></i>
                        </div>
                        <div className="text">Supplies</div>
                    </Link>
                </li>

                <li>
                    <Link to="/orders" className="menu-item">
                        <div className="icon">
                            <i className="fa fa-download" aria-hidden="true"></i>
                        </div>
                        <div className="text">Orders</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
