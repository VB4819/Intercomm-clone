import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>Inbox</h2>
      <div className="header-actions">
        <input placeholder="Search..." />
        <img
          src="https://i.pravatar.cc/32"
          alt="User"
          className="user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
