import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Suppliers.css';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the database
    const fetchSuppliers = async () => {
      try {
        const response = await fetch('/api/suppliers'); // Replace with your API endpoint
        const data = await response.json();
        setSuppliers(data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
      }
    };

    fetchSuppliers();
  }, []);

  // Filter suppliers based on search query
  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.supplierName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title">Suppliers</h2>
      <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search suppliers..." />
      <table className="table">
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Products</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Type</th>
            <th>On the Way</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.supplierName}</td>
              <td>{supplier.products}</td>
              <td>{supplier.contactNumber}</td>
              <td>{supplier.email}</td>
              <td>{supplier.type}</td>
              <td>{supplier.onTheWay ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
