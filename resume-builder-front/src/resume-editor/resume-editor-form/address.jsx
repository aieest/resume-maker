import React from "react";

function Address({ handleChange }) {

        const handleInputChange = (event) => {
            const { address, value } = event.target;
            handleChange(address, value);
        };

    return (
    <section className="editor-form">
        <input type="text" name="addressLine" className="line form-address" onChange={handleInputChange} placeholder="Address Line"/>
        <input type="text" name="addressCity" className="city form-address" onChange={handleInputChange} placeholder="City"/>
        <input type="text" name="addresspostalcode" className="posalt-code form-address" onChange={handleInputChange} placeholder="Postal Code"/>
        <input type="text" name="addressState" className="state form-address" onChange={handleInputChange} placeholder="State"/>
    </section>
    )
}

export default Address;