import React, { useState } from 'react';

const NewTaskform = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (taskInput.trim() !== '') {
      onAddTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h2>New Task Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskform;
