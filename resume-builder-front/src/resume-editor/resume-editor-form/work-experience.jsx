import React, { useState } from "react";

function WorkExperienceForm({ handleWorkExperienceChange, workExperiences, addWorkExperience, removeWorkExperience }) {
    const handleInputChange = (event, id) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        handleWorkExperienceChange(name, newValue, id);
    };

    return (
        <div className="work-editor-form">
            <p className="editor-subheader display-5">Work Experience</p>
            {workExperiences.map((experience, index) => (
                <div key={experience.id}>
                    <section>
                        <input type="text" name={`workExperienceCompany-${index}`} className="company form-experience form-control" onChange={e => handleInputChange(e, experience.id)} placeholder="Company Name"/>
                        <input type="text" name={`workExperiencePosition-${index}`} className="position form-experience form-control" onChange={e => handleInputChange(e, experience.id)} placeholder="Position"/>
                        <div className="form-date">
                            <input type="date" name={`workExperienceStart-${index}`} className="start-date form-experience form-control" onChange={e => handleInputChange(e, experience.id)} placeholder="Start Date"/>
                            <input type="date" name={`workExperienceEnd-${index}`} className="end-date form-experience form-control" onChange={e => handleInputChange(e, experience.id)} placeholder="End Date"/>
                            <div className="form-check form-switch present-btn d-flex justify-content-center align-items-center">
                                <input type="checkbox" name={`workExperiencePresent-${index}`} className="present-date form-experience form-check-input form-check-input-lg form-switch-lg" onChange={e => handleInputChange(e, experience.id)} />
                                <label className="form-check-label fs-8 fs-lg-4 mb-0 ms-2" htmlFor={`workExperiencePresent-${index}`}>Present</label>
                            </div>
                        </div>
                        <input type="text" name={`workExperienceDescription-${index}`} className="description form-experience form-control" onChange={e => handleInputChange(e, experience.id)} placeholder="Description"/>
                    </section>
                    {workExperiences.length > 1 && <button onClick={() => removeWorkExperience(experience.id)} className="btn btn-outline-danger">Remove</button>}
                </div>
            ))}
            <button onClick={addWorkExperience} className="add-work btn btn-outline-primary">Add Work Experience</button>
        </div>
    );
}

export default WorkExperienceForm;

