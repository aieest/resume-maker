import React, { useState } from "react";

function ResumeEditor() {
    const [familyName, setFamilyName] = useState("familyName");
    const [middleName, setMiddleName] = useState("middleName");
    const [givenName, setGivenName] = useState("givenName");

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "familyName") {
            setFamilyName(value);
        } else if (name === "middleName") {
            setMiddleName(value);
        } else if (name === "givenName") {
            setGivenName(value);
        }
    };
    return (
        <main className="resumer-editor">
            <EditorForm handleChange={handleChange} />
            <ResumePreview familyName={familyName} middleName={middleName} givenName={givenName} />
        </main>
    );
}

function EditorForm({ handleChange }) {
    return (
    <section className="editor-form">
        <input type="text" name="familyName" className="last form-name" onChange={handleChange} />
        <input type="text" name="givenName" className="given form-name" onChange={handleChange} />
        <input type="text" name="middleName" className="middle form-name" onChange={handleChange} />
    </section>
    )
}

function ResumePreview({ familyName, middleName, givenName }) {
    return (
        <section className="resume-preview">
            <div className="preview name">
                <p>{familyName}, </p>
                <p>{givenName} </p>
                <p>{middleName}</p>
            </div>
        </section>
    );
}

export default ResumeEditor;