import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-input" />
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
      </div>
    </header>
  );
};

export default Header;
