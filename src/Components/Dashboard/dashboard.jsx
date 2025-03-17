import React from 'react';
import Navbar from '../Authentication/Navbar/navbar';


const Dashboard = () => {
    return (
        <div className="flex justify-start w-full"> {/* Ensure full width to left align */}
            <Navbar /> {/* No need for additional div if navbar is already styled */}
        </div>
    );
};

export default Dashboard;
