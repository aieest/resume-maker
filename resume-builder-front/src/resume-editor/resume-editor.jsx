import React from 'react';
import NameForm from './resume-editor-form/name';
import AddressForm from './resume-editor-form/address';
import ContactForm from './resume-editor-form/contact';
import WorkExperienceForm from './resume-editor-form/work-experience';
import NamePreview from './resume-editor-preview/name-preview';
import AddressPreview from './resume-editor-preview/address-preview';
import ContactPreview from './resume-editor-preview/contact-preview';
import WorkExperiencePreview from './resume-editor-preview/work-experience-preview';

function ResumeEditor({ 
  name, setName, 
  address, setAddress, 
  contact, setContact,
  workExperiences, handleWorkExperienceChange, addWorkExperience, removeWorkExperience
}) {
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
        <WorkExperienceForm 
          workExperiences={workExperiences} 
          handleWorkExperienceChange={handleWorkExperienceChange} 
          addWorkExperience={addWorkExperience} 
          removeWorkExperience={removeWorkExperience} 
        />
      </content>
      <content className="editor-preview">
        <NamePreview {...name} />
        <AddressPreview {...address} />
        <ContactPreview {...contact} />
        <WorkExperiencePreview workExperiences={workExperiences} />
      </content>
    </section>
  );
}

export default ResumeEditor;