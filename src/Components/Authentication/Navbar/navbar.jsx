import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaChartBar, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { authService } from "../../../Services/Authentication";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className="menu">
                <li>
                    <Link to="/dashboard">
                        <FaTachometerAlt className="icon" />
                        <span className="text">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/inventory">
                        <FaBox className="icon" />
                        <span className="text">Inventory</span>
                    </Link>
                </li>
                <li>
                    <Link to="/reports">
                        <FaChartBar className="icon" />
                        <span className="text">Reports</span>
                    </Link>
                </li>
                <li onClick={authService.logout} className="logout">
                    <FaSignOutAlt className="icon" />
                    <span className="text">Logout</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
