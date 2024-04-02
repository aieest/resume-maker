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

  return (
    <>
      <ResumeEditor 
        name={name} 
        setName={setName} 
        address={address} 
        setAddress={setAddress} 
        contact={contact}
        setContact={setContact}
      />
    </>
  );
}

export default App;

