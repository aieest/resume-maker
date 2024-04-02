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

  return (
    <>
      <ResumeEditor 
        name={name} 
        setName={setName} 
        address={address} 
        setAddress={setAddress} 
      />
    </>
  );
}

export default App;

