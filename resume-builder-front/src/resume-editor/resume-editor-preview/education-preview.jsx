import React from "react";

function EducationPreview({ educations }) {
    return (
        <div>
            <p className="preview-subheader">Educational Background</p>
            {educations.map((education, index) => (
                <div key={education.id} className="preview-education">
                    <h5 className="preview-education-course">{education[`educationCourseName-${index}`]}</h5>
                    <p>{education[`educationSchoolName-${index}`]}</p>
                    <p>{education[`educationLevel-${index}`]}</p>
                    <div className="preview-education-dates">
                        <p>{education[`educationStart-${index}`]}&nbsp;-&nbsp;</p>
                        {education[`educationPresent-${index}`] ? <p>Present</p> : <p>{education[`educationEnd-${index}`]}</p>}
                    </div>
                    <p>{education[`educationDescription-${index}`]}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationPreview;
