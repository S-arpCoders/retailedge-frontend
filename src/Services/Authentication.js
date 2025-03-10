export const authService = {
    async login(email, password) {
        try {
            const response = await fetch("http://172.20.7.73:8080/api/v1/auth/login", {
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

    async register(email, password) {
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
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
