import React from 'react'

function Card({ details }) {
  if (!details) return null;

  return (
    <div className="card">
      <h2>Registered Details</h2>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Contact:</strong> {details.contact}</p>
      <p><strong>Email:</strong> {details.email}</p>
      <p><strong>Department:</strong> {details.department}</p>
      <p><strong>Position:</strong> {details.position}</p>
      <p><strong>Address:</strong> {details.address}</p>
    </div>
  )
}

export default Card;
