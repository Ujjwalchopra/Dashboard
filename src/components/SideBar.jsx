import React from 'react';
import { FaHome, FaList, FaBell, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <FaHome />
      </div>
      <div className="sidebar-icon">
        <FaList />
      </div>
      <div className="sidebar-icon">
        <FaBell />
      </div>
      <div className="sidebar-icon">
        <FaEnvelope />
      </div>
    </div>
  );
};

export default Sidebar;
