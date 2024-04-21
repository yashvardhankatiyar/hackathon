import React, { useState } from 'react';
import Cards from './cards'; // Assuming the filename is 'Cards.js'

const CompanyForm = () => {
  const details = ["Company Name", "Company Domain", "Share Capital", "Certification Number", "Business Address", "Type of Company"];

  // State to manage form responses
  const [responses, setResponses] = useState([
    {
      companyName: "",
      companyDomain: "",
      shareCapital: "",
      certificationNumber: "",
      businessAddress: "",
      typeOfCompany: ""
    }
  ]);

  // Function to update response state
  const handleChange = (index, value) => {
    setResponses(prevResponses => {
      const updatedResponses = [...prevResponses];
      updatedResponses[0][details[index]] = value;
      return updatedResponses;
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Submitted:", responses[0]); // Do whatever you need with the form data
  };

  return (
    <>
      {details.map((heading, index) => (
        <Cards
          key={heading}
          deets={heading}
          value={responses[0][details[index]]} // Pass current value as prop
          onChange={(e) => handleChange(index, e.target.value)} // Pass change handler function
        />
      ))}

      <button onClick={handleSubmit}>SUBMIT</button>
    </>
  );
}

export default CompanyForm;
