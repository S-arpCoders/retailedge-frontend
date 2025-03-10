

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
                {/* Hamburger Menu */}
                <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
                <p>This is the bottom section content. You can add more content here as needed.</p>
            </div>
        </div>
    );
};

export default Landing;
