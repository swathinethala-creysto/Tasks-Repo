import React, { useState } from 'react';
import Role from '../Menu/Role';

function Login(props) {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Role: ${role} Name: ${name}`);
    // Perform login action here
    if (role && name) {
      props.onLoggedIn({ role, name });
    }
  };
  const onUserSelecting = (data) => {
    setRole(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role:
        <Role onSelectData={onUserSelecting} />
      </label>
      <br />
      <br />
      <label>
        Name:
        <input
          style={{
            width: '50%',
            height: '30px',
          }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button style={{ width: '30%', height: '30px' }} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;
