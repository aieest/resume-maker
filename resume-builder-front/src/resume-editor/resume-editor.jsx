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
    <section className="resume-editor">
      <content className="editor-form">
        <NameForm handleNameChange={handleNameChange} />
        <AddressForm handleAddressChange={handleAddressChange} />
        <ContactForm handleContactChange={handleContactChange} />
      </content>
      <content className="editor-preview">
        <NamePreview {...name} />
        <AddressPreview {...address} />
        <ContactPreview {...contact} />
      </content>
    </section>
  );
}

export default ResumeEditor;