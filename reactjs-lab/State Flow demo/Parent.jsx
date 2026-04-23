import React, { useState } from 'react';
import Child from './Child';
import Display from './Display';

const Parent = () => {
  const [data, setData] = useState("Initial Data");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Parent Component</h2>
      {/* Pass data and update function to children */}
      <Child data={data} updateData={() => updateData("Data from Child 1")} />
      <Child data={data} updateData={() => updateData("Data from Child 2")} />
      {/* Display component only for showing current state */}
      <Display data={data} />
    </div>
  );
};

export default Parent;