
import React from 'react';
import { Link } from 'react-router-dom'; // To handle navigation
import './landing.css'; // Add your custom styles here

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-box">
                <h1 className="landing-heading">Welcome </h1>
                <div className="button-container">
                    <Link to="/about" className="landing-button">About Us</Link>
                    <Link to="/registration" className="landing-button">Registration</Link>
                    <Link to="/login" className="landing-button">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
