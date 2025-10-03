import React from "react";
import "./index.css";

function App() {
  const students = [
    { name: "Ronak", roll: "101", course: "Physics" },
    { name: "Ayush", roll: "102", course: "Chemistry" },
    { name: "Anish", roll: "103", course: "Mathematics" },
    { name: "Danish", roll: "104", course: "Biology" },
  ];

  const StudentCard = ({ student }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-64">
        <h2 className="text-xl font-bold mb-2">{student.name}</h2>
        <p className="text-gray-700 mb-1">Roll No: {student.roll}</p>
        <p className="text-gray-700">Course: {student.course}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center p-8 bg-gray-100 min-h-screen">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
}

export default App;
