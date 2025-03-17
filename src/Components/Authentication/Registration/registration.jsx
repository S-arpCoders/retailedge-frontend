import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import './registration.css';
import { authService } from '../../../Services/Authentication';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        number: '',
        password: '',
        email: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        try {
            await authService.register(formData);
            navigate('/business');
        } catch (error) { // Ensure the error is defined here
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <h2>Create Account</h2>
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
                        id="phone_no"
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

                {/* Link to the login page */}
                <div className="formGroup">
                    <p>
                        Already have an account? <Link to="/login">Login </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
