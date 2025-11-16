// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', university: '', profilePic: null
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'profilePic' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app: Send formData to backend
        console.log('Sign Up Data:', formData);
        
        // Mock successful signup
        alert('Account Created! Please Log In.');
        navigate('/login'); 
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="text" name="university" placeholder="University/College" onChange={handleChange} required />
                <label className="file-upload-label">
                    Optional Profile Picture
                    <input type="file" name="profilePic" accept="image/*" onChange={handleChange} />
                </label>
                <button type="submit" className="primary-btn">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    );
};

export default SignupPage;