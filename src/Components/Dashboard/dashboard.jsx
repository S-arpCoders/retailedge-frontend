import React, { useEffect, useState } from 'react';
import Navbar from '../Authentication/Navbar/navbar';
import './dashboard.css'; // Import CSS file
import { Bar } from 'react-chartjs-2';
import Reports from '../../Services/Reports';
import productService from "../../Services/Products";
import products from "../../Services/Products";

const Dashboard = () => {
    const [salesData, setSalesData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const sales = await Reports.getSalesReport();
                const inventory = await Reports.getInventoryReport();

                setSalesData(sales ? sales.slice(0, 5) : []);
                setInventoryData(inventory ? inventory.slice(0, 5) : []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-container">
                {/* Report Section Aligned to the Left */}
                <div className="report-card">
                    {loading ? (
                        <div className="loading">Loading...</div>
                    ) : error ? (
                        <div className="error">{error}</div>
                    ) : (
                        <ReportDashboard salesData={salesData} inventoryData={inventoryData} />
                    )}
                </div>

                {/* Inventory Summary Section Aligned to the Right */}
                <div className="inventory-summary-card">
                    <InventorySummary />
                </div>
            </div>
        </div>
    );
};

const ReportDashboard = ({ salesData, inventoryData }) => {
    return (
        <div className="report-container">
            <h2 className="report-title">Business Insights</h2>
            <div className="chart-section">
                <h3 className="chart-label">Sales Data</h3>
                <Bar data={formatSalesData(salesData)} options={smallChartOptions} />
            </div>
            <div className="chart-section">
                <h3 className="chart-label">Inventory Levels</h3>
                <Bar data={formatInventoryData(inventoryData)} options={smallChartOptions} />
            </div>
        </div>
    );
};

// Chart configuration optimized for fitting in the browser
const smallChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: true },  // Ensure legend is shown
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: { lineWidth: 1 },  // Add grid lines for better visibility
        },
        x: {
            ticks: { maxRotation: 45, minRotation: 0 },
            grid: { lineWidth: 1 },  // Add grid lines for better visibility
        },
    },
    layout: {
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
};


// Dummy functions for formatting data
const formatSalesData = (salesData) => ({
    labels: salesData.map((item) => item.label),
    datasets: [{
        label: 'Sales',
        data: salesData.map((item) => item.value),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Bar color
        borderColor: 'rgba(54, 162, 235, 1)',      // Line color
        borderWidth: 2,
        fill: true,  // Fill under the line
        tension: 0.4,  // Smooth the line
    }],
});

const formatInventoryData = (inventoryData) => ({
    labels: inventoryData.map((item) => item.label),
    datasets: [{
        label: 'Inventory',
        data: inventoryData.map((item) => item.value),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Bar color
        borderColor: 'rgba(255, 99, 132, 1)',      // Line color
        borderWidth: 2,
        fill: true,  // Fill under the line
        tension: 0.4,  // Smooth the line
    }],
});

const InventorySummary = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalStock, setTotalStock] = useState(0);
    const [lowStockProducts, setLowStockProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        productService.getAllProducts()
            .then((response) => {
                const total = response.length;
                const stock = response.reduce((acc, product) => acc + product.stockQuantity, 0);

                // Categorize products
                const lowStock = response.filter(product => product.stockQuantity < 10); // Example threshold for low stock
                const highStock = response.filter(product => product.stockQuantity > 50); // Example threshold for high stock
                const outOfStock = response.filter(product => product.stockQuantity === 0); // Products with no stock
                // Sort products by sales (assuming `salesQuantity` is available in the product object)
                const sortedBySales = response
                    .sort((a, b) => b.salesQuantity - a.salesQuantity)  // Sort descending by sales quantity
                    .slice(0, 10); // Get top 10 products
                // Get all unique suppliers from the products

                const allSuppliers = Array.from(new Set(response.flatMap(product => product.suppliers)));

                // Update state
                setTotalProducts(total);
                setTotalStock(stock);
                setLowStockProducts(lowStock);
                setTopSellingProducts(sortedBySales);
               setSuppliers(allSuppliers);


            })
            .catch((error) => {
                setError("Error fetching product summary: " + error.message);
                console.error("Error fetching product summary:", error);
            });
    }, []);

    return (
        <div className="inventory-summary">
            <h2 className="summary-title">Inventory Summary</h2>
            {error && <div className="error">{error}</div>}

            <div className="summary-item">
                <strong>Total Products:</strong> {totalProducts}
            </div>
            <div className="summary-item">
                <strong>Total Stock:</strong> {totalStock}
            </div>

            <div className="summary-item">
                <strong>Low Stock Products (less than 10):</strong>
                {lowStockProducts.length > 0 ? (
                    <ul>
                        {lowStockProducts.map(product => (
                            <li key={product.productId}>{product.name} ({product.stockQuantity})</li>
                        ))}
                    </ul>
                ) : (
                    <p>None</p>
                )}
            </div>

            <div className="summary-item">
                <strong>Top Selling Products:</strong>
                {topSellingProducts.length > 0 ? (
                    <ul>
                        {topSellingProducts.map(product => (
                            <li key={product.productId}>
                                {product.name} (Sold: {product.salesQuantity} units)
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No top-selling products available</p>
                )}
            </div>

    <div className="summary-item">
        <strong>high stock:</strong>
        {lowStockProducts.length > 10 ? (
            <ul>
                {lowStockProducts.map(product => (
                    <li key={product.productId}>
                        {product.name} (Sold: {product.salesQuantity} units)
                    </li>
                ))}
            </ul>
        ) : (
            <p>No top-selling products available</p>
        )}
    </div>
            <div className="summary-item">
                <strong>Suppliers:</strong>
                {suppliers.length > 0 ? (
                    <ul>
                        {suppliers.map((supplier, index) => (
                            <li key={index}>{supplier}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No suppliers available</p>
                )}
            </div>

        </div>
    );
};

export default Dashboard;
