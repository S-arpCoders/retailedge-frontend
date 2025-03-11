import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/Authentication/Registration/registration.jsx';
import BusinessForm from './Components/Authentication/Business/business.jsx';
import LoginForm from './Components/Authentication/Login/login.jsx';
import Landing from './Components/Landing/landing';
import Dashboard from './Components/Dashboard/dashboard.jsx';
import Inventory from "./Components/Inventory/inventory.jsx";
import Report from "./Components/Report/report.jsx";
import Suppliers from "./Components/Suppliers/suppliers.jsx";
import Orders from "./Components/Orders/orders.jsx";
import Navbar from './Components/Authentication/Navbar/navbar.jsx'; // Import Navbar component
import './App.css'; // Import the CSS file for styling

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Add Navbar component */}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Landing />} /> {/* Landing page */}
                        <Route path="/registration" element={<RegistrationForm />} /> {/* Registration form page */}
                        <Route path="/business" element={<BusinessForm />} /> {/* Business form page */}
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inventory" element={<Inventory />} /> {/* Inventory Page */}
                        <Route path="/report" element={<Report />} /> {/* Report Page */}
                        <Route path="/suppliers" element={<Suppliers />} /> {/* Suppliers Page */}
                        <Route path="/orders" element={<Orders />} /> {/* Orders Page */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;