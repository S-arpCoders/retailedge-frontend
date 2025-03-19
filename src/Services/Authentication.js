import { API_BASE_URL, DEV_MODE } from '../config';

export const authService = {
    async login(email, password) {
        if (DEV_MODE) {
            console.log("DEV_MODE is ON - Auto-login successful");
            localStorage.setItem("token", "test-token"); // Fake token for development
            return { token: "test-token" };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json(); // Extract token from response body
            localStorage.setItem("token", data.token); // Store token for future requests
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    logout() {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page after logout
    },

    getToken() {
        return localStorage.getItem("token"); // Retrieve the stored token
    },

    isAuthenticated() {
        return DEV_MODE || !!localStorage.getItem("token"); // Allow bypass in DEV_MODE
    }
};
export const authFetch = async (url, options = {}) => {
    const token = authService.getToken();

    if (!token && !DEV_MODE) {
        throw new Error("No authentication token found. Please log in.");
    }

    // Attach the token in the Authorization header
    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }), // Only add if token exists
    };

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
        authService.logout(); // If unauthorized, force logout
        throw new Error("Session expired. Please log in again.");
    }

    return response.json();
};
