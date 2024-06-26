import React from "react";

function ContactForm({ handleContactChange }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handleContactChange(name, value);
    };

    return (
        <section className="contact-editor-form">
            <p className="editor-subheader display-5">Contacts</p>
            <input type="text" name="mobileContact" className="mobile form-contact form-control" onChange={handleInputChange} placeholder="Mobile Number"/>
            <input type="text" name="homeContact" className="home form-contact form-control" onChange={handleInputChange} placeholder="Home Landline"/>
            <input type="text" name="emailContact" className="email form-contact form-control" onChange={handleInputChange} placeholder="Email Address"/>
        </section>
    );
}

export default ContactForm;
