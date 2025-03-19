import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [stockMovements, setStockMovements] = useState([]); // Store stock movement data
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Replace with your API endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const fetchStockMovements = async () => {
      try {
        const response = await fetch('/api/stockMovements'); // Replace with your stock movement API endpoint
        const data = await response.json();
        setStockMovements(data);
      } catch (error) {
        setError('Error fetching stock movements: ' + error.message);
        console.error('Error fetching stock movements:', error);
      }
    };

    fetchOrders();
    fetchStockMovements();
  }, []);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Filter orders based on status and search query
  const filteredOrders = orders.filter(order =>
      (filterStatus === '' || order.status === filterStatus) &&
      order.products.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper function to compare dates (returns true if batch is expired)
  const isBatchExpired = (stockMovementDate, batchExpirationDate) => {
    const stockMovementDateObj = new Date(stockMovementDate);
    const batchExpirationDateObj = new Date(batchExpirationDate);
    return stockMovementDateObj > batchExpirationDateObj; // True if stock movement is after expiration date
  };

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
            <th>Stock Movement Date</th>
            <th>Batch Expiration Date</th>
            <th>Expired?</th>
          </tr>
          </thead>
          <tbody>
          {filteredOrders.map((order) => {
            // Find stock movement and batch expiration for the order
            const stockMovement = stockMovements.find((movement) =>
                movement.orderId === order.id
            );

            return (
                <tr key={order.id}>
                  <td>{order.products}</td>
                  <td>{order.orderValue}</td>
                  <td>{order.quantity}</td>
                  <td>{order.orderId}</td>
                  <td>{order.expectedDelivery}</td>
                  <td>{order.status}</td>
                  <td>{stockMovement ? stockMovement.stockMovementDate : 'N/A'}</td>
                  <td>{stockMovement ? stockMovement.batchExpirationDate : 'N/A'}</td>
                  <td>
                    {stockMovement &&
                    isBatchExpired(stockMovement.stockMovementDate, stockMovement.batchExpirationDate)
                        ? 'Yes'
                        : 'No'}
                  </td>
                </tr>
            );
          })}
          </tbody>
        </table>

        {error && <div className="error">{error}</div>}
      </div>
  );
};

export default Order;
