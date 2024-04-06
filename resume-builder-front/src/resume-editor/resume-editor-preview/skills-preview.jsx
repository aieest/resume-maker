import React from "react";

function SkillPreview({ skills }) {
    return (
        <div>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillPreview;
