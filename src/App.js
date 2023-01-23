import React, { useState } from 'react';
import './Style.css';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const onLoggedIn = (data) => {
    console.log('data', data);
    setName(data.name);
    setRole(data.role);
    setIsLoggedIn(true);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Swathi Solutions</h3>
      </div>
      {isLoggedIn && (
        <div style={{ textAlign: 'end', marginRight: '20px' }}>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
      {isLoggedIn ? (
        <Menu role={role} name={name} />
      ) : (
        <Login onLoggedIn={onLoggedIn} />
      )}
    </div>
  );
}
