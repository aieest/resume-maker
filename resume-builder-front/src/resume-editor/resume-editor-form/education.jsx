import React from "react";

function EducationForm({ handleEducationChange, educations, addEducation, removeEducation }) {
    const handleInputChange = (event, id) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        handleEducationChange(name, newValue, id);
    };

    return (
        <div  className="education-editor-form">
            <p className="editor-subheader display-5">Educational Background</p>
            {educations.map((education, index) => (
                <div key={education.id}>
                    <section>
                        <input type="text" name={`educationCourseName-${index}`} className="course-name form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="Course/Strand"/>
                        <input type="text" name={`educationSchoolName-${index}`} className="school-name form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="School Name"/>
                        <input type="text" name={`educationLevel-${index}`} className="education-level form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="Level"/>
                        <div className="form-date">
                            <input type="date" name={`educationStart-${index}`} className="education-start-date form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="Start Date"/>
                            <input type="date" name={`educationEnd-${index}`} className="education-end-date form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="End Date"/>
                            <div className="form-check form-switch present-btn d-flex justify-content-center align-items-center">
                                <input type="checkbox" name={`educationPresent-${index}`} className="education-present-date form-education form-check-input form-check-input-lg form-switch-lg" onChange={e => handleInputChange(e, education.id)} />
                                <label className="form-check-label fs-8 fs-lg-4 mb-0 ms-2" htmlFor={`educationPresent-${index}`}>Present</label>
                            </div>
                        </div>
                        <input type="text" name={`educationDescription-${index}`} className="education-description form-education form-control" onChange={e => handleInputChange(e, education.id)} placeholder="Description"/>
                    </section>
                    {educations.length > 1 && <button onClick={() => removeEducation(education.id)} btn btn-outline-danger>Remove</button>}
                </div>
            ))}
            <button onClick={addEducation} className="add-education btn btn-outline-primary">Add Education</button>
        </div>
    );
}

export default EducationForm;
