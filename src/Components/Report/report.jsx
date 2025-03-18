import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Layout from '../Layout';
import Reports from '../../Services/Reports';
import './Report.css';

const Report = () => {
    const [salesData, setSalesData] = useState(null);
    const [inventoryData, setInventoryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const sales = await Reports.getSalesReport();
                const inventory = await Reports.getInventoryReport();
                console.log("Sales Data:", sales);
                console.log("Inventory Data:", inventory);
                setSalesData(sales);
                setInventoryData(inventory);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <Layout>
            <div className="report-container">
                <h2 className="report-title">Business Insights Dashboard</h2>
                <div className="chart-section">
                    <h3 className="chart-label">Sales Data</h3>
                    <Bar data={formatSalesData(salesData)} options={horizontalChartOptions} height={300} />
                </div>
                <div className="chart-section">
                    <h3 className="chart-label">Inventory Levels</h3>
                    <Bar data={formatInventoryData(inventoryData)} options={chartOptions} height={300} />
                </div>
            </div>
        </Layout>
    );
};

const formatSalesData = (data) => {
    if (!data || !Array.isArray(data)) return { labels: [], datasets: [] };
    return {
        labels: data.map(item => item.product),
        datasets: [{
            label: 'Units Sold',
            data: data.map(item => item.total_sold),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    };
};

const formatInventoryData = (data) => {
    if (!data || !Array.isArray(data)) return { labels: [], datasets: [] };
    return {
        labels: data.map(item => item.product),
        datasets: [{
            label: 'Stock Available',
            data: data.map(item => item.batch_quantity),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    };
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        y: { beginAtZero: true }
    }
};

const horizontalChartOptions = {
    ...chartOptions,
    indexAxis: 'y',
};

export default Report;
