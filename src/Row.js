import React from 'react';

const Row = (props) => {
  const { data } = props;
  return (
    <div>
      {Object.keys(data).map((item) => (
        <div
          style={{
            backgroundColor: item == 2 || item == 3 ? props.color : 'lightgray',
            width: '12px',
            borderRadius: '30px',
            height: data[item],
          }}
        ></div>
      ))}
    </div>
  );
};

export default Row;
