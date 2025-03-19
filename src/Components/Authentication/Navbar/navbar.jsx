import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../../Services/Authentication";

const Navbar = () => {
    return (
        <nav className="sidebar">
            <ul className="menu">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li onClick={authService.logout} style={{ cursor: "pointer", color: "red" }}>Logout</li>
            </ul>
        </nav>
    );
};

export default Navbar;
