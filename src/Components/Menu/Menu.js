import React, { useState, useEffect } from 'react';
import Role from './Role';

const Menu = (props) => {
  const { role, name } = props;
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (role === 'super admin') {
      setMenuItems([
        'Dashboard',
        'Users',
        'Settings',
        'Analytics',
        'DataBases',
        'Collections',
        'Actions',
      ]);
    } else if (role === 'admin') {
      setMenuItems([
        'Dashboard',
        'Profile',
        'Update Leaves',
        'Updates Attendnace',
        'Posts',
      ]);
    } else if (role === 'user') {
      setMenuItems(['Login', 'Profile', 'Attendance', 'Leaves', 'Vibe']);
    } else if (role === 'guest') {
      setMenuItems(['Login', 'About']);
    }
  }, [role]);

  return (
    <div>
      <div>
        <h5 style={{ textTransform: 'capitalize' }}>hii {name}</h5>
        <h1 style={{ textTransform: 'capitalize' }}>Hello {role} Welcome</h1>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            style={{
              width: '30%',
              margin: '15px auto',
              border: '1px solid red',
              borderRadius: '10px',
              backgroundColor:
                role === 'super admin'
                  ? '#9a9afb'
                  : role === 'admin'
                  ? 'rgb(73 255 74)'
                  : role === 'user'
                  ? 'rgb(255 251 79)'
                  : 'rgb(242 118 47)',
            }}
          >
            <div style={{ margin: '10px' }}>{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
