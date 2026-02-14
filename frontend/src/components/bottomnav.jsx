import React from "react";

function BottomNav({ setCurrentPage }) {
  return (
    <div className="bottom-nav">
      <button onClick={() => setCurrentPage("tasks")}>
        <span className="nav-icon">📋</span>
        <span className="nav-label">Tasks</span>
      </button>

      <button onClick={() => setCurrentPage("activity")}>
        <span className="nav-icon">🔄</span>
        <span className="nav-label">Activity</span>
      </button>

      <button onClick={() => setCurrentPage("profile")}>
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profile</span>
      </button>
    </div>
  );
}

export default BottomNav;
