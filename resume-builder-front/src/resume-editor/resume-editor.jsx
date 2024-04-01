import React, { useState } from "react";
import Name from "./resume-editor-form/name"
import NamePreview from "./resume-editor-preview/name-preview"
import Address from "./resume-editor-form/address";
import AddressPreview from "./resume-editor-preview/address-preview";

function ResumeEditor() {
    const [familyName, setFamilyName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [givenName, setGivenName] = useState("");
    const [suffixName, setSuffixName] = useState("");
    const [streetAddress, setStreetAddress] = useState("")
    const [cityAddress, setCityAddress] = useState("")
    const [postalCodeAddress, setPostalCodeAddress] = useState("")
    const [stateAddress, setStateAddress] = useState("")

    const handleNameChange = (name, value) => {
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
    }

    const handleAddressChange = (address, value) => {
        switch (address) {
            case "streetAddress":
                setStreetAddress(value);
                break;
            case "cityAddress":
                setCityAddress(value);
                break;
            case "postalCodeAddress":
                setPostalCodeAddress(value);
                break;
            case "stateAddress":
                setStateAddress(value);
                break;
            default:
                break;
        }
    }

    return (
        <main className="resume-editor">
            <EditorForm handleNameChange={handleNameChange} handleAddressChange={handleAddressChange} />
            <ResumePreview 
                familyName={familyName} 
                middleName={middleName} 
                givenName={givenName} 
                suffixName={suffixName} 
                streetAddress={streetAddress}
                cityAddress={cityAddress}
                postalCodeAddress={postalCodeAddress}
                stateAddress={stateAddress}
            />
        </main>
    );
}

function EditorForm({ handleNameChange, handleAddressChange }) {
    return (
    <section className="editor-form">
        <Name handleChange={handleNameChange} />
        <Address handleChange={handleAddressChange} />
    </section>
    )
}

function ResumePreview({ familyName, middleName, givenName, suffixName, streetAddress, cityAddress, postalCodeAddress, stateAddress }) {
    return (
        <section className="resume-preview">
            <NamePreview familyName={familyName} middleName={middleName} givenName={givenName} suffixName={suffixName} />
            <AddressPreview streetAddress={streetAddress} cityAddress={cityAddress} postalCodeAddress={postalCodeAddress} stateAddress={stateAddress}/>
        </section>
    );
}

export default ResumeEditor;