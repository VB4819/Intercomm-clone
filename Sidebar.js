import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Intercom</div>
      <nav>
        <ul>
          <li className="active">Inbox</li>
          <li>Automation</li>
          <li>Analytics</li>
          <li>Knowledge</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
