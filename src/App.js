import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/Authentication/Registration/registration.jsx';
import BusinessForm from './Components/Authentication/Business/business.jsx';
import LoginForm from './Components/Authentication/Login/login.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Welcome to Our Platform</h1>

                {/* Set up the routes for different forms */}
                <Routes>
                    <Route path="/" element={<RegistrationForm />} /> {/* Registration form page */}
                    <Route path="/business" element={<BusinessForm />} /> {/* Business form page */}
                    <Route path="/LOGIN" element={<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
