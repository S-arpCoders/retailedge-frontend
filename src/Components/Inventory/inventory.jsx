import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './inventoryStyle.css';
import productService from "../../Services/Products";

const ITEMS_PER_PAGE = 10;

const Inventory = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterOption, setFilterOption] = useState('');

    useEffect(() => {
        productService.getAllProducts()
            .then((response) => {
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
            product.description.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page after search
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setActiveTab('overview');
        setIsEditing(false);
    };

    const handleFilter = (event) => {
        const option = event.target.value;
        setFilterOption(option);
        if (option) {
            setFilteredProducts(products.filter(p => p.categoryId === parseInt(option)));
        } else {
            setFilteredProducts(products);
        }
        setCurrentPage(1); // Reset to first page after filtering
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const categories = [
        { id: 9, name: 'Cameras & Photography' },
        { id: 1, name: 'Clement' },
        { id: 4, name: 'Computer Accessories' },
        { id: 10, name: 'Drones & Action Cameras' },
        { id: 6, name: 'Gaming Consoles' },
        { id: 12, name: 'Graphics Cards' },
        { id: 2, name: 'Headphones & Audio' },
        { id: 3, name: 'Laptops & Computers' },
        { id: 15, name: 'Networking & Routers' },
        { id: 11, name: 'Power Banks & Charging' },
        { id: 14, name: 'Printers & Scanners' },
        { id: 7, name: 'Smart Home Devices' },
        { id: 13, name: 'Storage Devices' },
        { id: 5, name: 'TVs & Monitors' },
        { id: 8, name: 'Wearables & Smartwatches' }
    ];

    return (
        <div className="content">
            <h2>Inventory List</h2>
            <SearchBar onSearch={handleSearch} />

            <div className="filter-sort">
                <select onChange={handleFilter} value={filterOption}>
                    <option value="">Filter by Category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="product-list">
                {paginatedProducts.map((product) => (
                    <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span> Page {currentPage} of {totalPages} </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Inventory;
