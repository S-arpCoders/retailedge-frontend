import React, { useState } from 'react';
import './landing.css';

const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="body-container">
            {/* Top Section - Contains the hamburger menu */}
            <div className="top-section">
                {/*logo  */}
                <div className="logo-container">
                    <img src="../../Logo.png" width="500" height="150" alt="RetailEdge Logo" className="logo" />
                </div>

                {/* Bootstrap navbar links (only shown when the hamburger menu is open) */}
                {isMenuOpen && (
                    <div className="menu-links">
                        <ul>
                            <li><a href="/login"  className="text-link">Login</a></li>
                            <li><a href="/registration" className="text-link">Register</a></li>

                        </ul>
                    </div>
                )}
                <div className="get-started-container">
                    <a href="/registration" className="get-started-btn">Get Started</a>
                </div>
            </div>

            {/* Bottom Section with Content Boxes */}
            <div className="bottom-section">

                <div className="welcome position-relative aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
                    <h2>WELCOME TO RetailEdge</h2>
                    <p> Unified Inventory Management and POS System for Small Business owners !</p>
                </div>

                {/* Content Boxes Section */}
                <div className="content row gy-4">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="why-box aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                            <h3>Why Choose RetailEdge?</h3>
                            <p>
                                This Management Inventory System Provides real-time updates on stock levels, automatically update inventory after sales transactions,
                                and offer alerts for low stock and expiring items. This solution will improve operational efficiency and reduce costly errors caused by separate systems.

                            </p>
                            <div className="text-center">
                                <button className="more-btn" onClick={() => window.location.href = '/registration'}>
                                    <span>Get Started</span> <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="row gy-4">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box aos-init aos-animate" data-aos="zoom-out" data-aos-delay="300">
                                        <i className="fa fa-barcode"></i>
                                        <h4>Expiry Tracking</h4>
                                        <p>Perishable goods will be tracked by expiration dates, with automatic alerts when items are nearing expiry.</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box aos-init aos-animate" data-aos="zoom-out" data-aos-delay="400">
                                        <i className="fa fa-bell"></i>
                                        <h4>Low Stock Alerts</h4>
                                        <p>Automated notifications will alert business owners to reorder stock before it runs out.</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box aos-init aos-animate" data-aos="zoom-out" data-aos-delay="500">
                                        <i className="fa fa-users"></i>
                                        <h4>Role-Based Access & Multi-Device Support</h4>
                                        <p>Multiple users, such as employees, managers, and business owners, will have different access rights,
                                            enabling efficient operations from various devices and locations. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Section - Positioned outside the bottom section */}
                <footer className="footer">
                    <p>&copy; 2025 RetailEdge. All rights reserved.</p>
                </footer>
            </div>

        </div>
    );
};

export default Landing;


