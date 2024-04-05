import React from "react";

function EducationForm({ handleEducationChange, educations, addEducation, removeEducation }) {
    const handleInputChange = (event, id) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        handleEducationChange(name, newValue, id);
    };

    return (
        <div>
            {educations.map((education, index) => (
                <div key={education.id}>
                    <section className="editor-form">
                        <input type="text" name={`educationCourseName-${index}`} className="course-name form-education" onChange={e => handleInputChange(e, education.id)} placeholder="Course/Strand"/>
                        <input type="text" name={`educationSchoolName-${index}`} className="school-name form-education" onChange={e => handleInputChange(e, education.id)} placeholder="School Name"/>
                        <input type="text" name={`educationLevel-${index}`} className="education-level form-education" onChange={e => handleInputChange(e, education.id)} placeholder="Level"/>
                        <input type="date" name={`educationStart-${index}`} className="education-start-date form-education" onChange={e => handleInputChange(e, education.id)} placeholder="Start Date"/>
                        <input type="date" name={`educationEnd-${index}`} className="education-end-date form-education" onChange={e => handleInputChange(e, education.id)} placeholder="End Date"/>
                        <label>
                            <input type="checkbox" name={`educationPresent-${index}`} className="education-present-date form-education" onChange={e => handleInputChange(e, education.id)} />
                            Present?
                        </label>
                        <input type="text" name={`educationDescription-${index}`} className="education-description form-education" onChange={e => handleInputChange(e, education.id)} placeholder="Description"/>
                    </section>
                    {educations.length > 1 && <button onClick={() => removeEducation(education.id)}>Remove</button>}
                </div>
            ))}
            <button onClick={addEducation}>Add Education</button>
        </div>
    );
}

export default EducationForm;
