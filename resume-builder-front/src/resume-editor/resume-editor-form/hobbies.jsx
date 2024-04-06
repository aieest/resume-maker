import React from "react";

function HobbyForm({ handleHobbyChange }) {
    const handleInputChange = (event) => {
        const { value } = event.target;
        handleHobbyChange(value.split(',').map(skill => skill.trim()));
    };

    return (
        <section className="editor-form">
            <input type="text" name="hobbies" className="form-hobbies" onChange={handleInputChange} placeholder="Hobbies (Separate using commas)"/>
        </section>
    );
}

export default HobbyForm;