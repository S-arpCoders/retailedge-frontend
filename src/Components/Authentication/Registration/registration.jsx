import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.css';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
       number: '',
        password: '',
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
        navigate('/business'); // Navigate to the business form page
    };


    return (
        <div className="container">
            <h2 className="heading">Registration Form</h2>
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
                    <label htmlFor="surname" className="label">Surname</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="number" className="label">Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
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
                    <button type="submit" className="button">Next</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
