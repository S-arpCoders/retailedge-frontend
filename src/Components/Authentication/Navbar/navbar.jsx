import React, { useState } from 'react';
import './navbar.css'; // Ensure you have this CSS file

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        //<div className="container">//
           // <section className="content">
                <nav
                    className={`sidebar ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ul className="menu">
                        <li className="selected">
                            <div className="icon">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <div className="text">vals</div>
                        </li>

                        <li>
                            <div className="icon">
                                <i className="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div className="text">Dashboard</div>
                        </li>

                        <li>
                            <div className="icon">
                                <i className="fa fa-line-chart" aria-hidden="true"></i>
                            </div>
                            <div className="text">Reports</div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-list" aria-hidden="true"></i>
                            </div>
                            <div className="text">Inventory</div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-area-chart" aria-hidden="true"></i>
                            </div>
                            <div className="text">suplies</div>
                        </li>

                        <li>
                            <div className="icon">
                                <i className="fa fa-download" aria-hidden="true"></i>
                            </div>
                            <div className="text">orders</div>
                        </li>
                    </ul>
                </nav>

            //</section>
        //</div>
    );
};

export default Navbar;
