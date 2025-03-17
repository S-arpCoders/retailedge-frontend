import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the database
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/v1/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredOrders = orders.filter(order =>
    (filterStatus === '' || order.status === filterStatus) &&
    order.products.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrderHistoryClick = () => {
    // Add your order history logic here
    console.log('Order history clicked');
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Orders</h2>
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search products..." />
        <div className="buttons">
          <div className="filter">
            <label htmlFor="statusFilter">Filter by Status:</label>
            <select
              id="statusFilter"
              value={filterStatus}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Delayed">Delayed</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Returned">Returned</option>
              <option value="Out for Delivery">Out for Delivery</option>
            </select>
          </div>
          <button className="history-button" onClick={handleOrderHistoryClick}>
            Order History
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Order Value</th>
            <th>Quantity</th>
            <th>Order ID</th>
            <th>Expected Delivery</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.products}</td>
              <td>{order.orderValue}</td>
              <td>{order.quantity}</td>
              <td>{order.orderId}</td>
              <td>{order.expectedDelivery}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;