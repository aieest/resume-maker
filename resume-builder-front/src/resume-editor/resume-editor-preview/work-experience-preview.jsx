import React from "react";

function WorkExperiencePreview({ workExperiences }) {
    return (
        <div>
            <p className="preview-subheader">Professional Experience</p>
            {workExperiences.map((experience, index) => (
                <div key={experience.id} className="preview-work-experience">
                    <h5 className="preview-work-experience-position">{experience[`workExperiencePosition-${index}`]}</h5>
                    <p>{experience[`workExperienceCompany-${index}`]}</p>
                    <div className="preview-work-experience-dates">
                        {experience[`workExperienceStart-${index}`] && experience[`workExperienceEnd-${index}`] ? (
                            <p>{experience[`workExperienceStart-${index}`]}&nbsp;-&nbsp;</p>
                        ) : null}
                        {experience[`workExperiencePresent-${index}`] ? <p>Present</p> : <p>{experience[`workExperienceEnd-${index}`]}</p>}
                    </div>
                    <p>{experience[`workExperienceDescription-${index}`]}</p>
                </div>
            ))}
        </div>
    );
}

export default WorkExperiencePreview;

