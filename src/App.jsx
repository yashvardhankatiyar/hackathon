import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import './App.css';
import CompanyForm from "./components/CompanyForm";
import Container from "./components/Container";
import CompanyHeading from "./components/CompanyHeading"

function App() {
 

  return (
    <div className="App">

    <CompanyHeading></CompanyHeading>
    <Container>
    <CompanyForm></CompanyForm>
    </Container>
    </div>
  );
}

export default App;

