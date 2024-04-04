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
      />
    </>
  );
}

export default App;

