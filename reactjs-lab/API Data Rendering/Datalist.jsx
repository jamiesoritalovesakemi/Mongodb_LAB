import React from 'react';

const DataList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {items.map((item) => (
      <li key={item.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </li>
    ))}
  </ul>
);

export default DataList;