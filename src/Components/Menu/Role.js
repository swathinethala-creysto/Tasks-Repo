import React, { useEffect, useState } from 'react';

const Role = (props) => {
  const [role, setRole] = useState('');
  const handleChange = (e) => {
    setRole(e.target.value);
    props.onSelectData(e.target.value);
  };
  return (
    <select
      style={{
        width: '50%',
        height: '30px',
        textAlign: 'center',
      }}
      id="role-select"
      onChange={handleChange}
      value={role}
    >
      <option value="">Select Role</option>
      <option value="super admin">Super Admin</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
      <option value="guest">Guest</option>
    </select>
  );
};

export default Role;
