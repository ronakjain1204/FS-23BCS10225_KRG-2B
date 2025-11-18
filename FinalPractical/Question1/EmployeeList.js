import React, { useState } from 'react';

const allEmployees = [
  'Ronak Jain',
  'Ayush Choudhary',
  'Danish Khajuria',
  'Anish Yadav',
  'Aditya Thakur',
  'Ishan Thakur',
  'Sujal Gupta',
  'Nihal Diwedi',
  'Kritarth Kashyap',
  ,
];

function EmployeeList() {
  const [filterText, setFilterText] = useState('');

    const filteredEmployees = allEmployees.filter(employee =>
    employee.toLowerCase().startsWith(filterText.toLowerCase())
  );

  function handleFilterChange(event) {
    setFilterText(event.target.value);
  }

  return (
    <div>
      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={handleFilterChange}
      />

      <ul>
        {filteredEmployees.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;