import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './inventoryStyle.css';
import productService from "../../Services/Products";

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterOption, setFilterOption] = useState('');
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stockQuantity: '', barcode: '' });
    const [showForm, setShowForm] = useState(false);

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
    };

    const handleFilter = (event) => {
        const option = event.target.value;
        setFilterOption(option);
        if (option) {
            setFilteredProducts(products.filter(p => p.categoryId === parseInt(option)));
        } else {
            setFilteredProducts(products);
        }
    };

    const handleNewProductChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleAddProduct = async () => {
        try {
            const response = await productService.addProduct(newProduct);
            setProducts([...products, response]);
            setFilteredProducts([...filteredProducts, response]);
            setNewProduct({ name: '', description: '', price: '', stockQuantity: '', barcode: '' });
            setShowForm(false);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div className="inventory-container">
            <h2 className="inventory-title">Inventory</h2>
            <SearchBar onSearch={handleSearch} />

            <div className="filter-sort">
                <select onChange={handleFilter} value={filterOption}>
                    <option value="">Filter by Category</option>
                    <option value="1">Laptops</option>
                    <option value="2">Headphones</option>
                    <option value="3">Monitors</option>
                </select>
            </div>

            <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Form' : 'Add New Product'}
            </button>

            {showForm && (
                <div className="new-product-form">
                    <h3>Add New Product</h3>
                    <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleNewProductChange} />
                    <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleNewProductChange} />
                    <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleNewProductChange} />
                    <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={newProduct.stockQuantity} onChange={handleNewProductChange} />
                    <input type="text" name="barcode" placeholder="Barcode" value={newProduct.barcode} onChange={handleNewProductChange} />
                    <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
                </div>
            )}

            <div className="inventory-grid">
                {filteredProducts.map((product) => (
                    <div key={product.productId} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span className="price">R{product.price.toFixed(2)}</span>
                        <span className="stock">Stock: {product.stockQuantity}</span>
                        <span className="barcode">Barcode: {product.barcode}</span>
                        <button className="add-button">Add Item</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;
