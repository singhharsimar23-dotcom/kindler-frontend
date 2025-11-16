// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, isAuthenticated, onLogout }) => {
    
    const handleLogout = () => {
        onLogout();
        toggleSidebar();
    };

    return (
        <>
            <div className="hamburger" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h3 className="app-title">K I N D L E R</h3>
                <div className="menu-links">
                    
                    <Link to="/" onClick={toggleSidebar} className="nav-link">🔥 Home</Link>
                    <Link to="/about" onClick={toggleSidebar} className="nav-link">❓ About</Link>

                    {isAuthenticated && (
                        <>
                            <hr />
                            <Link to="/matches" onClick={toggleSidebar} className="nav-link">🤝 My Matches</Link>
                            <Link to="/create" onClick={toggleSidebar} className="nav-link">✨ Create Project</Link>
                            <Link to="/profile" onClick={toggleSidebar} className="nav-link">👤 Profile</Link>
                            <button onClick={handleLogout} className="nav-link logout-btn">🚪 Logout</button>
                        </>
                    )}
                    
                    {!isAuthenticated && (
                        <>
                            <hr />
                            <Link to="/login" onClick={toggleSidebar} className="nav-link">➡️ Log In</Link>
                            <Link to="/signup" onClick={toggleSidebar} className="nav-link">📝 Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;