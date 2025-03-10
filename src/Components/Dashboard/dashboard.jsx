import React from 'react';
import Navbar from '../Authentication/Navbar/navbar';

const Dashboard = () => {
    return (
        <div className="flex">

            <div>
                <Navbar />
            </div>
            <div className="flex flex-col w-full p-10">
                <h1>Welcome to the Dashboard</h1>
                <p>This is your dashboard page.</p>
                {/* You can add more content here */}
            </div>
        </div>
    );
};

export default Dashboard;

