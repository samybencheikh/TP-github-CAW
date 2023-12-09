import React, { useState } from 'react';

const Subtask = ({ text, completed, onCompleteSubtask }) => {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text} <button onClick={onCompleteSubtask}>DONE</button>
    </li>
  );
};

const Task = ({ id, text, onCompleteTask, onAddSubtask }) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [newSubtaskText, setNewSubtaskText] = useState('');
  const [subtasks, setSubtasks] = useState([]); // Ajout de l'état pour les sous-tâches

  const handleToggleSubtasks = () => {
    setShowSubtasks(!showSubtasks);
  };

  const handleAddSubtask = () => {
    const newSubtask = {
      id: Date.now(),
      text: newSubtaskText,
      completed: false,
    };
    setSubtasks((prevSubtasks) => [...prevSubtasks, newSubtask]);
    setNewSubtaskText('');
  };

  const handleCompleteTask = () => {
    onCompleteTask(id);
  };

  const handleCompleteSubtask = (subtaskId) => {
    setSubtasks((prevSubtasks) =>
      prevSubtasks.map((subtask) =>
        subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
      )
    );
  };

  return (
    <div>
      <div>
        {text} <button onClick={handleToggleSubtasks}>Sub-Tasks</button>
        <button onClick={handleCompleteTask}>DONE</button>
      </div>
      {showSubtasks && (
        <ul>
          {subtasks.map((subtask) => (
            <Subtask
              key={subtask.id}
              text={subtask.text}
              completed={subtask.completed}
              onCompleteSubtask={() => handleCompleteSubtask(subtask.id)}
            />
          ))}
          <li>
            <input
              type="text"
              value={newSubtaskText}
              onChange={(e) => setNewSubtaskText(e.target.value)}
            />
            <button onClick={handleAddSubtask}>Add Subtask</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Task;
