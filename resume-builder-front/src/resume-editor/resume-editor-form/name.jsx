import React from "react";

function NameForm({ handleNameChange }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleNameChange(name, value);
    };

    return (
        <section className="name-editor-form">
            <input type="text" name="familyName" className="family form-name form-control" onChange={handleInputChange} placeholder="Family Name"/>
            <input type="text" name="givenName" className="given form-name form-control" onChange={handleInputChange} placeholder="Given Name"/>
            <input type="text" name="middleName" className="middle form-name form-control" onChange={handleInputChange} placeholder="Middle Name"/>
            <input type="text" name="suffixName" className="suffix form-name form-control" onChange={handleInputChange} placeholder="Suffix"/>
        </section>
    );
}

export default NameForm;
