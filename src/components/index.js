import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className='contained'>
      <br />
      <h1>People</h1>
      <div>
        <Link to="/create">
          <Button>Create Employee</Button>
        </Link>
      </div>    
    </div>
  );
}

export default Index;
