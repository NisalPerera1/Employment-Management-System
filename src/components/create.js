import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Create({ history }) {
  const [fullName, setFullName] = useState('');
  const [nameWithInitials, setNameWithInitials] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [joinedDate, setJoinedDate] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [personalNotes, setPersonalNotes] = useState('');
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission here

    const formData = {
          fullName,
          nameWithInitials,
          preferredName,
          gender,
          dob,
          email,
          mobileNumber,
          // employeeId,
          designation,
          employeeType,
          joinedDate,
          experience,
          salary,
          personalNotes
        };
        axios.post("/api/employee", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Create New Employee</h2>
        <form onSubmit={handleSubmit}>
        <div className="row">

    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="fname">Full Name</label>
        <input type="text" className="form-control" id="fullname" value={fullName} onChange={(e) => setFullName(e.target.value)}/>

      </div>
    </div>
    </div>

  
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="fname">Name with Initials</label>
        <input type="text" className="form-control" id="nameWithInitials" value={nameWithInitials} onChange={(e) => setNameWithInitials(e.target.value)}/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="lname">Preferred/Display Name</label>
        <input type="text" className="form-control" id="preferedname" value={preferredName} onChange={(e) => setPreferredName(e.target.value)}/>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" className="form-control" id="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input type="text" className="form-control" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input type="text" className="form-control" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="employeeType">Employee Type</label>
        <select className="form-control" id="employeeType" value={employeeType} onChange={(e) => setEmployeeType(e.target.value)}>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contractor</option>
        </select>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="joinedDate">Joined Date</label>
        <input type="date" className="form-control" id="joinedDate" value={joinedDate} onChange={(e) => setJoinedDate(e.target.value)}/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <input type="number" className="form-control" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)}/>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <input type="number" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <div className="form-group">
        <label htmlFor="notes">Personal Notes</label>
        <textarea id="notes" name="notes" rows="4" cols="113" value={personalNotes} onChange={(e) => setPersonalNotes(e.target.value)}></textarea>
        </div>
  </div>
  </div>


  <div className="d-flex justify-content-end">
  <Button variant="primary" onClick={handleSubmit}>Submit</Button> 
  </div>

        </form>
      </div>
    </div>

  );
  
  
}

export default Create;
