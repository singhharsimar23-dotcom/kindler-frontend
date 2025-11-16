// src/pages/HomePage.js
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './HomePage.css'; 

// Dummy Data for Swiping
const DUMMY_PROJECTS = [
    { id: 1, title: "React Wizard for Startup", description: "Build a modern dashboard...", skills: ["React", "Node.js"], category: "Tech", postedBy: "Alice", pic: 'A' },
    { id: 2, title: "Logo Design for Food Truck", description: "Need a fun, recognizable logo...", skills: ["Design", "Illustrator"], category: "Art", postedBy: "Bob", pic: 'B' },
    { id: 3, title: "Content Writer for Blog", description: "Weekly blog posts on sustainable living...", skills: ["SEO", "Copywriting"], category: "Marketing", postedBy: "Charlie", pic: 'C' },
];

const HomePage = () => {
    const [projects, setProjects] = useState(DUMMY_PROJECTS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null); // For animation

    const currentProject = projects[currentIndex];

    const handleSwipe = (direction) => {
        if (!currentProject) return;

        setSwipeDirection(direction); // Start animation
        
        // In a real app: Send like/reject to backend
        console.log(`${direction} on Project ${currentProject.id}`);

        setTimeout(() => {
            // Check for match (Mock match success for Project 2)
            if (direction === 'right' && currentProject.id === 2) {
                alert(`It's a Match! You and ${currentProject.postedBy} are ready to collaborate on: ${currentProject.title}`);
            }

            // Move to the next project
            setCurrentIndex(prevIndex => prevIndex + 1);
            setSwipeDirection(null); // Reset animation state
        }, 300); // Match animation duration to CSS
    };

    if (currentIndex >= projects.length) {
        return <div className="no-more-projects">No more projects to swipe on right now!</div>;
    }

    return (
        <div className="home-page-container">
            <h2>🔥 Projects Near You</h2>
            <div className="card-stack">
                <div className={`swipe-card-wrapper ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}>
                    <ProjectCard project={currentProject} />
                </div>
            </div>

            <div className="action-buttons">
                <button className="reject-button" onClick={() => handleSwipe('left')}>❌ Pass</button>
                <button className="like-button" onClick={() => handleSwipe('right')}>✅ Like</button>
            </div>
        </div>
    );
};

export default HomePage;