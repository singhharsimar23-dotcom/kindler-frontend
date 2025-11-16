// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    // Truncate description to max 100 words
    const description = project.description.split(' ').slice(0, 100).join(' ') + (project.description.length > 100 ? '...' : '');

    return (
        <div className="project-card">
            <div className="card-header">
                <span className="creator-pic">{project.pic}</span>
                <div className="header-text">
                    <h3>{project.title}</h3>
                    <small>Posted by: {project.postedBy}</small>
                </div>
            </div>
            
            <div className="card-body">
                <p className="description">{description}</p>
                <div className="category-tag">{project.category}</div>
            </div>
            
            <div className="card-footer">
                <p>Skills Required:</p>
                <div className="skills-list">
                    {project.skills.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;