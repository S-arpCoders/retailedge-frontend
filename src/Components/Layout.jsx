import React from "react";
import Navbar from "./Authentication/Navbar/navbar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
