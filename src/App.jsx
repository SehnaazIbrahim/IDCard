import './App.css'
import React, { useState } from 'react';
import Form from './Form'
import Card from './card';


function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
      <Form onSubmit={setSubmittedData} />
      <br />
      <Card details={submittedData} />
    </>
  )
}

export default App;
