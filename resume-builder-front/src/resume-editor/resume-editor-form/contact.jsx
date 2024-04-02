import React from "react";

function ContactForm({ handleContactChange }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleContactChange(name, value);
    };

    return (
        <section className="editor-form">
            <input type="text" name="mobileContact" className="mobile form-contact" onChange={handleInputChange} placeholder="Mobile Number"/>
            <input type="text" name="homeContact" className="home form-contact" onChange={handleInputChange} placeholder="Home Landline"/>
            <input type="text" name="emailContact" className="email form-contact" onChange={handleInputChange} placeholder="Email Address"/>
        </section>
    );
}

export default ContactForm;
