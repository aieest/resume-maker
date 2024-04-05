import React from "react";

function EducationPreview({ educations }) {
    return (
        <div>
            {educations.map((education, index) => (
                <div key={education.id} className="preview education">
                    <p>{education[`educationCourseName-${index}`]}</p>
                    <p>{education[`educationSchoolName-${index}`]}</p>
                    <p>{education[`educationLevel-${index}`]}</p>
                    <p>{education[`educationStart-${index}`]}</p>
                    {education[`educationPresent-${index}`] ? <p>Present</p> : <p>{education[`educationEnd-${index}`]}</p>}
                    <p>{education[`educationDescription-${index}`]}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationPreview;
