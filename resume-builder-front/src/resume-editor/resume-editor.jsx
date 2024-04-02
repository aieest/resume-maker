import React from 'react';
import NameForm from './resume-editor-form/name';
import AddressForm from './resume-editor-form/address';
import ContactForm from './resume-editor-form/contact';
import NamePreview from './resume-editor-preview/name-preview';
import AddressPreview from './resume-editor-preview/address-preview';
import ContactPreview from './resume-editor-preview/contact-preview';

function ResumeEditor({ name, setName, address, setAddress, contact, setContact }) {
  const handleNameChange = (name, value) => {
    setName(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (name, value) => {
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleContactChange = (name, value) => {
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="resume-editor">
      <div className="editor-section">
        <h2>Name</h2>
        <NameForm handleNameChange={handleNameChange} />
        <NamePreview {...name} />
      </div>
      <div className="editor-section">
        <h2>Address</h2>
        <AddressForm handleAddressChange={handleAddressChange} />
        <AddressPreview {...address} />
      </div>
      <div className="editor-section">
        <h2>Contacts</h2>
        <ContactForm handleContactChange={handleContactChange} />
        <ContactPreview {...contact} />
      </div>
    </div>
  );
}

export default ResumeEditor;