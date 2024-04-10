import React, { useState } from "react";

function WorkExperienceForm({ handleWorkExperienceChange, workExperiences, addWorkExperience, removeWorkExperience }) {
    const handleInputChange = (event, id) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        handleWorkExperienceChange(name, newValue, id);
    };

    return (
        <div className="work-editor-form">
            {workExperiences.map((experience, index) => (
                <div key={experience.id}>
                    <section>
                        <input type="text" name={`workExperienceCompany-${index}`} className="company form-experience" onChange={e => handleInputChange(e, experience.id)} placeholder="Company Name"/>
                        <input type="text" name={`workExperiencePosition-${index}`} className="position form-experience" onChange={e => handleInputChange(e, experience.id)} placeholder="Position"/>
                        <input type="date" name={`workExperienceStart-${index}`} className="start-date form-experience" onChange={e => handleInputChange(e, experience.id)} placeholder="Start Date"/>
                        <input type="date" name={`workExperienceEnd-${index}`} className="end-date form-experience" onChange={e => handleInputChange(e, experience.id)} placeholder="End Date"/>
                        <label>
                            <input type="checkbox" name={`workExperiencePresent-${index}`} className="present-date form-experience" onChange={e => handleInputChange(e, experience.id)} />
                            Present?
                        </label>
                        <input type="text" name={`workExperienceDescription-${index}`} className="description form-experience" onChange={e => handleInputChange(e, experience.id)} placeholder="Description"/>
                    </section>
                    {workExperiences.length > 1 && <button onClick={() => removeWorkExperience(experience.id)}>Remove</button>}
                </div>
            ))}
            <button onClick={addWorkExperience}>Add Work Experience</button>
        </div>
    );
}

export default WorkExperienceForm;

