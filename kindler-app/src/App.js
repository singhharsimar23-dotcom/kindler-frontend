// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import MatchesPage from './pages/MatchesPage';
import CreateProjectPage from './pages/CreateProjectPage';
import AboutPage from './pages/AboutPage';
import './App.css'; // Global styles

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Placeholder auth state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className="App">
                <Sidebar 
                    isOpen={isSidebarOpen} 
                    toggleSidebar={toggleSidebar} 
                    isAuthenticated={isAuthenticated}
                    onLogout={() => setIsAuthenticated(false)}
                />
                
                {/* Main Content Area */}
                <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <header className="main-header">
                        <h1>K I N D L E R</h1>
                    </header>

                    <main className="page-container">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
                            <Route path="/signup" element={<SignupPage />} />
                            
                            {/* Protected Routes (Conditional rendering based on auth) */}
                            {isAuthenticated ? (
                                <>
                                    <Route path="/create" element={<CreateProjectPage />} />
                                    <Route path="/matches" element={<MatchesPage />} />
                                    <Route path="/profile" element={<ProfilePage />} />
                                </>
                            ) : (
                                <Route path="*" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
                            )}
                            
                            <Route path="/about" element={<AboutPage />} />
                            {/* Add Contact and FAQ routes here */}
                            <Route path="/contact" element={<AboutPage type="contact" />} />
                            <Route path="/faq" element={<AboutPage type="faq" />} />
                        </Routes>
                    </main>
                </div>
                {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
            </div>
        </Router>
    );
}

export default App;