import React from "react";

function WorkExperiencePreview({ workExperiences }) {
    return (
        <div>
            {workExperiences.map((experience, index) => (
                <div key={experience.id} className="preview work-experience">
                    <p>{experience[`workExperienceCompany-${index}`]}</p>
                    <p>{experience[`workExperiencePosition-${index}`]}</p>
                    <p>{experience[`workExperienceStart-${index}`]}</p>
                    {experience[`workExperiencePresent-${index}`] ? <p>Present</p> : <p>{experience[`workExperienceEnd-${index}`]}</p>}
                    <p>{experience[`workExperienceDescription-${index}`]}</p>
                </div>
            ))}
        </div>
    );
}

export default WorkExperiencePreview;

