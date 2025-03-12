import { API_BASE_URL } from '../config';

export const salesService = {
    async createSale(saleData) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/sales`, {  // Replace with your actual endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(saleData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error creating sale:", error);
            throw error;
        }
    },

    async getSalesHistory(startDate, endDate) {
        try {
            const token = localStorage.getItem('token');
            let url = `${API_BASE_URL}/sales`;  // Replace with your actual endpoint
            if (startDate && endDate) {
                url += `?startDate=${startDate}&endDate=${endDate}`; // Append query parameters if dates are provided
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching sales history:", error);
            throw error;
        }
    },

    // ... (Add other sales-related service functions as needed)
};