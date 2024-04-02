import React from "react";

function AddressForm({ handleAddressChange }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleAddressChange(name, value);
    };

    return (
        <section className="editor-form">
            <input type="text" name="streetAddress" className="line form-address" onChange={handleInputChange} placeholder="Address Line"/>
            <input type="text" name="cityAddress" className="city form-address" onChange={handleInputChange} placeholder="City"/>
            <input type="text" name="postalCodeAddress" className="postal-code form-address" onChange={handleInputChange} placeholder="Postal Code"/>
            <input type="text" name="stateAddress" className="state form-address" onChange={handleInputChange} placeholder="State"/>
        </section>
    );
}

export default AddressForm;
