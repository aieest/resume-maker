import React from "react";

function SkillForm({ handleSkillChange }) {
    const handleInputChange = (event) => {
        const { value } = event.target;
        handleSkillChange(value.split(',').map(skill => skill.trim()));
    };

    return (
        <section className="editor-form">
            <input type="text" name="skills" className="form-skills" onChange={handleInputChange} placeholder="Skills (Separate using commas)"/>
        </section>
    );
}

export default SkillForm;
