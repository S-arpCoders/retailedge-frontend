import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './business.css';

const BusinessForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        businessNumber: '',
        email: '',
    });
    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // After submitting the form, navigate to the business form
        navigate('/login'); // Navigate to the business form page
    };

    return (
        <div className="containers">
            <h2 className="heading">Business Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <label htmlFor="name" className="label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="businessNumber" className="label">Business Number</label>
                    <input
                        type="text"
                        id="businessNumber"
                        name="businessNumber"
                        value={formData.businessNumber}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>


                <div className="formGroup">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                <div className="formGroup">
                    <button type="submit" className="button">Register</button>
                </div>
                <div className="formGroup">
                    <p>
                        Go Back to Registration Form <Link to="/registration">Register </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default BusinessForm;
