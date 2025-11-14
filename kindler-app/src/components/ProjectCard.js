// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project, onSwipe }) => {
    return (
        <div className="card-container">
            <div className="project-card">
                <h2>{project.title}</h2>
                <p>
                    **Owner:** {project.owner}
                </p>
                <p className="card-goal">
                    **Project Goal:** {project.goal}
                </p>
                
                <div className="skills-list">
                    **Skills Needed:**
                    <ul>
                        {project.skillsNeeded.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                
                <p className="card-description">
                    {project.description}
                </p>
            </div>
            
            <div className="swipe-buttons">
                {/* Swipe Left (Pass) */}
                <button 
                    className="swipe-button pass-button" 
                    onClick={() => onSwipe(project.id, 'PASS')}
                >
                    ❌ Pass
                </button>
                
                {/* Swipe Right (Kindle) */}
                <button 
                    className="swipe-button kindle-button" 
                    onClick={() => onSwipe(project.id, 'KINDLE')}
                >
                    🔥 Kindle
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;