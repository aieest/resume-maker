import React from 'react';
import './resume-editor-styles/form.css'
// Form imports
import NameForm from './resume-editor-form/name';
import AddressForm from './resume-editor-form/address';
import ContactForm from './resume-editor-form/contact';
import WorkExperienceForm from './resume-editor-form/work-experience';
import EducationForm from './resume-editor-form/education';
import SkillForm from './resume-editor-form/skills';
import HobbyForm from './resume-editor-form/hobbies';
//Preview imports
import NamePreview from './resume-editor-preview/name-preview';
import AddressPreview from './resume-editor-preview/address-preview';
import ContactPreview from './resume-editor-preview/contact-preview';
import WorkExperiencePreview from './resume-editor-preview/work-experience-preview';
import EducationPreview from './resume-editor-preview/education-preview';
import SkillPreview from './resume-editor-preview/skills-preview';
import HobbyPreview from './resume-editor-preview/hobbies-preview';

function ResumeEditor({ 
  name, setName, 
  address, setAddress, 
  contact, setContact,
  workExperiences, handleWorkExperienceChange, addWorkExperience, removeWorkExperience,
  educations, handleEducationChange, addEducation, removeEducation,
  skills, setSkills,
  hobbies, setHobbies
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

  const handleSkillChange = (value) => {
    setSkills(value);
  };

  const handleHobbyChange = (value) => {
    setHobbies(value);
  };

  return (
    <section className="resume-editor">
      <div className="editor-form">
        <NameForm handleNameChange={handleNameChange} />
        <AddressForm handleAddressChange={handleAddressChange} />
        <ContactForm handleContactChange={handleContactChange} />
        <WorkExperienceForm 
          workExperiences={workExperiences} 
          handleWorkExperienceChange={handleWorkExperienceChange} 
          addWorkExperience={addWorkExperience} 
          removeWorkExperience={removeWorkExperience} 
        />
        <EducationForm 
          educations={educations}
          handleEducationChange={handleEducationChange} 
          addEducation={addEducation} 
          removeEducation={removeEducation} 
        />
        <SkillForm handleSkillChange={handleSkillChange} />
        <HobbyForm handleHobbyChange={handleHobbyChange} />
      </div>
      <div className="editor-preview">
        <NamePreview {...name} />
        <AddressPreview {...address} />
        <ContactPreview {...contact} />
        <WorkExperiencePreview workExperiences={workExperiences} />
        <EducationPreview educations={educations} />
        <SkillPreview skills={skills} />
        <HobbyPreview hobbies={hobbies} />
      </div>
    </section>
  );
}

export default ResumeEditor;