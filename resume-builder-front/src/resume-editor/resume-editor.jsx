import React, { useState } from "react";
import Name from "./resume-editor-form/name"
import NamePreview from "./resume-editor-preview/name-preview"

function ResumeEditor() {
    const [familyName, setFamilyName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [suffixName, setSuffixName] = useState("");

    const handleChange = (name, value) => {
        switch (name) {
            case "familyName":
                setFamilyName(value);
                break;
            case "middleName":
                setMiddleName(value);
                break;
            case "givenName":
                setGivenName(value);
                break;
            case "suffixName":
                setSuffixName(value);
                break;
            default:
                break;
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
        <Name handleChange={handleChange} />
    </section>
    )
}

function ResumePreview({ familyName, middleName, givenName, suffixName }) {
    return (
        <section className="resume-preview">
            <NamePreview familyName={familyName} middleName={middleName} givenName={givenName} suffixName={suffixName} />
        </section>
    );
}

export default ResumeEditor;