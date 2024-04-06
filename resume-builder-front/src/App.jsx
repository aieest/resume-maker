import { useState } from 'react';
import './App.css';
import ResumeEditor from './resume-editor/resume-editor';

function App() {
  const [name, setName] = useState({
    familyName: '',
    givenName: '',
    middleName: '',
    suffixName: ''
  });

  const [address, setAddress] = useState({
    streetAddress: '',
    cityAddress: '',
    postalCodeAddress: '',
    stateAddress: ''
  });

  const [contact, setContact] = useState({
    phoneContact: '',
    homeContact: '',
    emailContact: ''
  });

  const [workExperiences, setWorkExperiences] = useState([{ id: 1 }]);

  const handleWorkExperienceChange = (name, value, id) => {
    const index = workExperiences.findIndex(exp => exp.id === id);
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][name] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addWorkExperience = () => {
    const id = Date.now();
    setWorkExperiences(prevExperiences => [...prevExperiences, { id }]);
  };

  const removeWorkExperience = (id) => {
    if (workExperiences.length === 1) {
      return;
    }

    const updatedExperiences = workExperiences.filter(exp => exp.id !== id);
    setWorkExperiences(updatedExperiences);
  };

  const [educations, setEducations] = useState([{ id: 1 }]);

  const handleEducationChange = (name, value, id) => {
    const index = educations.findIndex(edu => edu.id === id);
    const updatedEducations = [...educations];
    updatedEducations[index][name] = value;
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    const id = Date.now();
    setEducations(prevEducations => [...prevEducations, { id }]);
  };

  const removeEducation = (id) => {
    if (educations.length === 1) {
      return;
    }

    const updatedEducations = educations.filter(edu => edu.id !== id);
    setEducations(updatedEducations);
  };

  const [skills, setSkills] = useState([]);

  const handleSkillChange = (value) => {
    setSkills(value);
  };  

  const [hobbies, setHobbies] = useState([]);

  const handleHobbyChange = (value) => {
    setHobbies(value);
  };  

  return (
    <>
      <ResumeEditor 
        name={name} 
        setName={setName} 
        address={address} 
        setAddress={setAddress} 
        contact={contact}
        setContact={setContact}
        workExperiences={workExperiences}
        handleWorkExperienceChange={handleWorkExperienceChange}
        addWorkExperience={addWorkExperience}
        removeWorkExperience={removeWorkExperience}
        educations={educations}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
        removeEducation={removeEducation}
        skills={skills}
        setSkills={setSkills}
        handleSkillChange={handleSkillChange}
        hobbies={hobbies}
        setHobbies={setHobbies}
        handleHobbyChange={handleHobbyChange}
      />
    </>
  );
}

export default App;

