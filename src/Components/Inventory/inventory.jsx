import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './inventoryStyle.css';
import productService from "../../Services/Products";

const Inventory = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    productService.getAllProducts()
      .then((response) => {
        console.log('Fetched products:', response);
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.overview.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveTab('overview');
    setIsEditing(false);
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
                    <button className="action-button" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? 'Save Changes' : 'Edit'}
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
