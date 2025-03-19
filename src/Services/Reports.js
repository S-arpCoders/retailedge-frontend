import {API_BASE_URL} from '../config';


const Reports = {
    getSalesReport: async () => {
        const response = await fetch(`${API_BASE_URL}/reports/sales`);
        return response.json();
    },

    getInventoryReport: async () => {
        const response = await fetch(`${API_BASE_URL}/reports/inventory`);
        return response.json();
    },

    getStockMovements: async () => {
        const response = await fetch(`${API_BASE_URL}/reports/stock-movements`);
        return response.json();
    },

    getSupplierReport: async () => {
        const response = await fetch(`${API_BASE_URL}/reports/suppliers`);
        return response.json();
    }
};

export default Reports;