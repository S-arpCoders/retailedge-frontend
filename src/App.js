import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/Authentication/Registration/registration.jsx';
import BusinessForm from './Components/Authentication/Business/business.jsx';
import LoginForm from './Components/Authentication/Login/login.jsx';
import Landing from './Components/Landing/landing';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>SCAN OR GIVE ME YOUR MONEYYYYYY</h1>

                {/* Set up the routes for different forms */}
                <Routes>
                    <Route path="/" element={<Landing />} /> {/* Landing page */}
                    <Route path="/registration" element={<RegistrationForm />} /> {/* Registration form page */}
                    <Route path="/business" element={<BusinessForm />} /> {/* Business form page */}
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
