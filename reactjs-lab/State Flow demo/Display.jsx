import React from 'react';

const Display = ({ data }) => {
  return (
    <div style={{ marginTop: '10px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <h3>Display Component</h3>
      <p>Current Data: {data}</p>
    </div>
  );
};

export default Display;