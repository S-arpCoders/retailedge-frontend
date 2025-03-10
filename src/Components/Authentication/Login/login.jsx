import React, { useState } from 'react';
import './login.css';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        businessNumber: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        navigate('/dashboard');
    };

    return (
        <div className="container_">
            <h2 className="heading">Business Verification Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>




                <div className="formGroup">
                    <button type="submit" className="button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
