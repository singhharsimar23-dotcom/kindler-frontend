// src/components/ProjectForm.js
import React, { useState } from 'react';

const initialFormState = {
    title: '',
    owner: 'You', // Default owner is the current user
    skillsNeeded: '',
    goal: 'Portfolio piece',
    description: ''
};

const ProjectForm = ({ onAddProject }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form processing delay
        setTimeout(() => {
            // 1. Process Skills (turns comma-separated string into an array)
            const skillsArray = formData.skillsNeeded
                .split(',')
                .map(skill => skill.trim())
                .filter(skill => skill.length > 0);

            // 2. Create the new project object
            const newProject = {
                id: Date.now(), // Unique ID based on timestamp
                ...formData,
                skillsNeeded: skillsArray
            };

            // 3. Call the function passed from the parent (App.js)
            onAddProject(newProject);
            
            // 4. Reset the form
            setFormData(initialFormState);
            setIsSubmitting(false);
            alert(`Project "${newProject.title}" added to the queue!`);
        }, 800);
    };

    return (
        <div className="project-form-container">
            <h3>Submit Your Project Idea!</h3>
            <form onSubmit={handleSubmit} className="project-form">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Project Title (e.g., Kindler v2)" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                />
                <select name="goal" value={formData.goal} onChange={handleChange}>
                    <option value="Portfolio piece">Portfolio piece</option>
                    <option value="Startup idea">Startup idea</option>
                    <option value="Open Source contribution">Open Source contribution</option>
                </select>
                <input 
                    type="text" 
                    name="skillsNeeded" 
                    placeholder="Skills needed (e.g., React, Python, UX Design, separated by commas)" 
                    value={formData.skillsNeeded} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="description" 
                    placeholder="Brief description of the project goal and scope..." 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Post Project'}
                </button>
            </form>
        </div>
    );
};

export default ProjectForm;