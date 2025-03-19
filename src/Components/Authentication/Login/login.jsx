import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import { authService } from "../../../Services/Authentication";



const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(null);
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
        setError(null);

        try {
            await authService.login(formData.username, formData.password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container_">


            <h2 className="heading">Welcome Back!</h2>
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
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="formGroup">
                    <button type="submit" className="button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
