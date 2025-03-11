import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './inventoryStyle.css';

const Inventory = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Mock Data for testing
    const sampleData = [
      {
        id: 1,
        name: 'Laptop',
        overview: 'High-performance laptop with 16GB RAM and 512GB SSD',
        purchases: 'Bought 50 units from supplier ABC',
        adjustments: 'Reduced stock by 5 due to damage',
        history: 'Last updated on 2024-03-10'
      },
      {
        id: 2,
        name: 'Mouse',
        overview: 'Wireless ergonomic mouse with 3-year battery life',
        purchases: 'Ordered 200 units from supplier XYZ',
        adjustments: 'Increased stock by 20 due to returns',
        history: 'Last updated on 2024-03-08'
      },
      {
        id: 3,
        name: 'Keyboard',
        overview: 'Mechanical keyboard with RGB backlighting',
        purchases: 'Ordered 100 units from supplier DEF',
        adjustments: 'No recent stock adjustments',
        history: 'Last updated on 2024-03-05'
      }
    ];

    setProducts(sampleData);
    setFilteredProducts(sampleData); // Initially, show all products
  }, []);

  const handleSearch = (query, category) => {
    // Filter products based on search query
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
      setActiveTab('overview');
      setIsEditing(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDownload = (product) => {
    const data = `
      Product Name: ${product.name}
      Overview: ${product.overview}
      Purchases: ${product.purchases}
      Adjustments: ${product.adjustments}
      History: ${product.history}
    `;

    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${product.name}-details.txt`;
    link.click();
  };

  const renderTabContent = (product) => {
    switch (activeTab) {
      case 'overview':
        return <p>{isEditing ? <textarea defaultValue={product.overview} /> : product.overview}</p>;
      case 'purchases':
        return <p>{isEditing ? <textarea defaultValue={product.purchases} /> : product.purchases}</p>;
      case 'adjustments':
        return <p>{isEditing ? <textarea defaultValue={product.adjustments} /> : product.adjustments}</p>;
      case 'history':
        return <p>{isEditing ? <textarea defaultValue={product.history} /> : product.history}</p>;
      default:
        return <p>{product.overview}</p>;
    }
  };

  return (
    <div className="content">
      <h2>Inventory List</h2>

      {/* Include Search Bar */}
      <SearchBar onSearch={handleSearch} />

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products found...</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => handleProductClick(product)}
            >
              <h3>{product.name}</h3>
              {selectedProduct && selectedProduct.id === product.id && (
                <div className="product-details">
                  <div className="tabs">
                    <button
                      className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button
                      className={`tab-button ${activeTab === 'purchases' ? 'active' : ''}`}
                      onClick={() => setActiveTab('purchases')}
                    >
                      Purchases
                    </button>
                    <button
                      className={`tab-button ${activeTab === 'adjustments' ? 'active' : ''}`}
                      onClick={() => setActiveTab('adjustments')}
                    >
                      Adjustments
                    </button>
                    <button
                      className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                      onClick={() => setActiveTab('history')}
                    >
                      History
                    </button>
                  </div>
                  <div className="tab-content">
                    {renderTabContent(product)}
                  </div>
                  <div className="actions">
                    <button className="action-button" onClick={handleEditToggle}>
                      {isEditing ? 'Save Changes' : 'Edit'}
                    </button>
                    <button className="action-button" onClick={() => handleDownload(product)}>
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Inventory;
