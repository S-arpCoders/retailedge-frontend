import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Authentication/Login/login';
import RegistrationForm from './Components/Authentication/Registration/registration';
import BusinessForm from './Components/Authentication/Business/business';
import Dashboard from './Components/Dashboard/dashboard';
import Inventory from './Components/Inventory/inventory';
import Report from './Components/Report/report';
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import Landing from "./Components/Landing/landing";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="/business" element={<BusinessForm />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/reports" element={<Report />} />
                </Route>

                {/* Default Route */}
                <Route path="*" element={<Landing />} />
            </Routes>
        </Router>
    );
}

export default App;
