import React from "react";

function SkillForm({ handleSkillChange }) {
    const handleInputChange = (event) => {
        const { value } = event.target;
        handleSkillChange(value.split(',').map(skill => skill.trim()));
    };

    return (
        <section className="skills-editor-form">
            <p className="editor-subheader display-5">Skills</p>
            <input type="text" name="skills" className="form-skills form-control" onChange={handleInputChange} placeholder="Skills (Separate using commas)"/>
        </section>
    );
}

export default SkillForm;
