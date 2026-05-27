import React from "react";
import "./DarkModeToggle.css";

export default function DarkModeToggle({ isDark, toggleTheme }) {
  return (
    <button
      className={`theme-toggle-btn ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="toggle-track">
        <span className="toggle-icon sun">☀️</span>
        <span className="toggle-icon moon">🌙</span>
        <div className="toggle-thumb" />
      </div>
    </button>
  );
}
