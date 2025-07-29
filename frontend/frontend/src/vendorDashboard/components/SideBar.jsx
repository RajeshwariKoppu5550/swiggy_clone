import React from 'react'
import './App.css'
const SideBar = ({ productHandler, firmHandler }) => {
    return (
        <div className="sideBarSection">
            <ul>
                <li onClick={firmHandler} style={{ cursor: 'pointer' }}>Add Firm</li>
                <li onClick={productHandler} style={{ cursor: 'pointer' }}>Add Product</li>
                <li>All Product</li>
                <li>User Details</li>
            </ul>
        </div>
    );
};
export default SideBar
