import { API_BASE_URL } from '../config';

export const authService = {
    async login(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) throw new Error("Invalid credentials");
            const data = await response.json();
            localStorage.setItem("token", data.token);
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async register(formData) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Registration failed");
            const data = await response.json();
            localStorage.setItem("token", data.token);
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};