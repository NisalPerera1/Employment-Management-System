import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Index() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    if (filter === '') {
      setFilteredEmployees(employees);
    } else {
      setFilteredEmployees(
        employees.filter((employee) => employee.employeeType === filter)
      );
    }
  }, [filter, employees]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    setEmployees(employees.filter((employee) => employee._id !== id));
    setFilteredEmployees(filteredEmployees.filter((employee) => employee._id !== id));
  };

  return (
    <div>
      <div className='contained'>
        <br />
        <h1>People</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className='form-group'>
  <select className='form-select' value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value=''>Filter by Employee Type</option>
    <option value='Full Time'>Full Time</option>
    <option value='Part Time'>Part Time</option>
    <option value='Contract Basis'>Contract Basis</option>
    <option value='Other'>Other</option>
  </select>
</div>    &nbsp;


          <div>
            <Link to='/create'>
              <Button variant='contained' color='primary'>
                Create Employee
              </Button>
            </Link>
          </div>
        </div>
        <table class="table table-striped">          <thead>
            <tr>
              <th>Display Name</th>
              <th>Emp Id</th>
              <th>Designation</th>
              <th>Emp Type</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.preferredName}</td>
                <td>{employee._id}</td>
                <td>{employee.designation}</td>
                <td>{employee.employeeType}</td>
                <td>{employee.experience}</td>
                <td>
                  <Link to={`/edit/${employee._id}`}>
                    <Button variant='contained' color='primary'> 
                      Edit
                    </Button>&nbsp;
                  </Link>
                  <Button
  variant='contained'
  style={{ backgroundColor: 'red', color: 'white' }}
  onClick={() => handleDelete(employee._id)}
>
  Delete
</Button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
