// Taskliste.js
import React from 'react';
import Task from './Task';

const Taskliste = ({ tasks, onCompleteTask, onAddSubtask, onCompleteSubtask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            subtasks={task.subtasks}
            onCompleteTask={onCompleteTask}
            onAddSubtask={onAddSubtask}
            onCompleteSubtask={onCompleteSubtask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Taskliste;
