import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-2">Active Tasks</h2>
        <ul>
          {tasks.filter(task => !task.completed).map((task, index) => (
            <li key={index} className="flex items-center justify-between p-2 mb-2 rounded-lg bg-gray-200">
              <span className="flex-grow">{task.text}</span>
              <button
                onClick={() => handleToggleTask(index)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
              >
                Complete
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">Completed Tasks</h2>
        <ul>
          {tasks.filter(task => task.completed).map((task, index) => (
            <li key={index} className="flex items-center justify-between p-2 mb-2 rounded-lg bg-green-100">
              <span className="flex-grow line-through text-gray-500">{task.text}</span>
              <button
                onClick={() => handleDeleteTask(tasks.findIndex((t, i) => t.completed && i === index))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
