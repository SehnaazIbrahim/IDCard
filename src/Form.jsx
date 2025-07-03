import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    department: '',
    position: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowForm(false);  
  }

  return (
    <>
      <button onClick={() => setShowForm(true)}>Register the Form</button><br /><br />

      {showForm && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><input type='text' name="name" value={formData.name} onChange={handleChange} placeholder='Enter your Full Name' required /></td>
              </tr>
              <tr>
                <td>Contact No:</td>
                <td><input type='number' name="contact" value={formData.contact} onChange={handleChange} placeholder='Enter your contact no.' required /></td>
              </tr>
              <tr>
                <td>Email Id:</td>
                <td><input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email' required /></td>
              </tr>
              <tr>
                <td>Department:</td>
                <td><input type='text' name="department" value={formData.department} onChange={handleChange} placeholder='Enter your branch' required /></td>
              </tr>
              <tr>
                <td>Position:</td>
                <td><input type='text' name="position" value={formData.position} onChange={handleChange} placeholder='Enter the Position' required /></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td><textarea name="address" value={formData.address} onChange={handleChange} placeholder='Enter the Address' required /></td>
              </tr>
            </tbody>
          </table>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  )
}

export default Form;
