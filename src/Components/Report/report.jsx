import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Navbar from '../Authentication/Navbar/navbar';
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
        <div className="report-layout">
            <Navbar />
            <div className="report-container">
                <h2 className="report-title">Business Insights Dashboard</h2>
                <div className="chart-grid">
                    <div className="chart-section">
                        <h3 className="chart-label">Sales Data</h3>
                        <Bar
                            data={formatSalesData(salesData)}
                            options={horizontalChartOptions}
                        />
                    </div>
                    <div className="chart-section">
                        <h3 className="chart-label">Inventory Levels</h3>
                        <Bar
                            data={formatInventoryData(inventoryData)}
                            options={chartOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatSalesData = (data) => {
    const LIMIT = 5;
    if (!data || !Array.isArray(data)) return { labels: [], datasets: [] };

    const limitedData = data.slice(0, LIMIT);

    return {
        labels: limitedData.map(item => item.product),
        datasets: [{
            label: 'Units Sold',
            data: limitedData.map(item => item.total_sold),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    };
};

const formatInventoryData = (data) => {
    const LIMIT = 5;
    if (!data || !Array.isArray(data)) return { labels: [], datasets: [] };

    const limitedData = data.slice(0, LIMIT);

    return {
        labels: limitedData.map(item => item.product),
        datasets: [{
            label: 'Stock Available',
            data: limitedData.map(item => item.batch_quantity),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    };
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: { beginAtZero: false },
        x: {
            ticks: {
                maxRotation: 90,
                minRotation: 45,
                autoSkip: true,
                padding: 20,
            },
        },
    },
};

const horizontalChartOptions = {
    ...chartOptions,
    indexAxis: 'y',
    scales: {
        x: {
            ticks: {
                maxRotation: 90,
                minRotation: 45,
                autoSkip: true,
                padding: 20,
            },
        },
        y: {
            ticks: {
                padding: 10,
            },
        },
    },
};

export default Report;
