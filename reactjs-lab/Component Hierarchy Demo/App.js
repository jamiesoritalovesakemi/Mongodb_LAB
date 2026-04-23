import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleDataChange = () => {
    setRefresh(!refresh); // trigger re-fetch in StudentList
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Student Management</h1>
      <StudentForm onDataChange={handleDataChange} />
      <StudentList key={refresh} />
    </div>
  );
}

export default App;