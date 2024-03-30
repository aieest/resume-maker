import React, { useState } from "react";

function ResumeEditor() {
    const [familyName, setFamilyName] = useState("familyName");
    const [middleName, setMiddleName] = useState("middleName");
    const [givenName, setGivenName] = useState("givenName");
    const [suffixName, setSuffixName] = useState("suffixName");

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "familyName") {
            setFamilyName(value);
        } else if (name === "middleName") {
            setMiddleName(value);
        } else if (name === "givenName") {
            setGivenName(value);
        } else if (name === "suffixName") {
            setSuffixName(value);
        }
    };
    return (
        <main className="resumer-editor">
            <EditorForm handleChange={handleChange} />
            <ResumePreview familyName={familyName} middleName={middleName} givenName={givenName} suffixName={suffixName}/>
        </main>
    );
}

function EditorForm({ handleChange }) {
    return (
    <section className="editor-form">
        <input type="text" name="familyName" className="family form-name" onChange={handleChange} placeholder="Last Name"/>
        <input type="text" name="givenName" className="given form-name" onChange={handleChange} placeholder="Given Name"/>
        <input type="text" name="middleName" className="middle form-name" onChange={handleChange} placeholder="Middle Name"/>
        <input type="text" name="suffixName" className="suffix form-name" onChange={handleChange} placeholder="Suffix"/>
    </section>
    )
}

function ResumePreview({ familyName, middleName, givenName, suffixName }) {
    return (
        <section className="resume-preview">
            <div className="preview name">
                <p>{familyName}, </p>
                <p>{givenName} </p>
                <p>{suffixName} </p>
                <p>{middleName}</p>
            </div>
        </section>
    );
}

export default ResumeEditor;