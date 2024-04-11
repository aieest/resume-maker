import React from "react";

function HobbyForm({ handleHobbyChange }) {
    const handleInputChange = (event) => {
        const { value } = event.target;
        handleHobbyChange(value.split(',').map(skill => skill.trim()));
    };

    return (
        <section className="hobbies-editor-form">
            <input type="text" name="hobbies" className="form-hobbies form-control" onChange={handleInputChange} placeholder="Hobbies (Separate using commas)"/>
        </section>
    );
}

export default HobbyForm;
