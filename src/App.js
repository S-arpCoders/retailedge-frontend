import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/Authentication/Registration/registration.jsx';
import BusinessForm from './Components/Authentication/Business/business.jsx';
import LoginForm from './Components/Authentication/Login/login.jsx';
import Landing from './Components/Landing/landing';
import Dashboard from './Components/Dashboard/dashboard.jsx';
import 'font-awesome/css/font-awesome.min.css';
//import  Navbar from '/Components/Authentication/Navbar/navbar.jsx';

function App() {
    return (
        <Router>
            <div className="App">

                {/* Set up the routes for different forms */}
                <Routes>
                    <Route path="/" element={<Landing />} /> {/* Landing page */}
                    <Route path="/registration" element={<RegistrationForm />} /> {/* Registration form page */}
                    <Route path="/business" element={<BusinessForm />} /> {/* Business form page */}
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;