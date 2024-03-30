import React, { useState } from "react";

function ResumeEditor() {
    const [familyName, setFamilyName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [suffixName, setSuffixName] = useState("");

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
        <input type="text" name="familyName" className="family form-name" onChange={handleChange} placeholder="Family Name"/>
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
                <p>{familyName?.length > 0? familyName : "Family Name"}</p>
                <p>{givenName?.length > 0 ? givenName : "Given Name"}</p>
                {middleName && <p>{middleName}</p>}
                {suffixName && <p>{suffixName}</p>}
            </div>
        </section>
    );
}

export default ResumeEditor;