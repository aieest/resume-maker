import React from "react";

function SkillPreview({ skills }) {
    return (
        <>
        <p className="preview-subheader">Skills</p>        
        <div className="skills-preview">
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default SkillPreview;
