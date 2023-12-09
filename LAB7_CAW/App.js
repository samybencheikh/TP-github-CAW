// App.js
import React, { useState } from 'react';
import NewTaskform from './components/NewTaskform';
import Taskliste from './components/Taskliste';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      subtasks: [],
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddSubtask = (taskId, subtaskText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, subtasks: [...task.subtasks, { id: Date.now(), text: subtaskText, completed: false }] }
          : task
      )
    );
  };

  const handleCompleteSubtask = (taskId, subtaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
              ),
            }
          : task
      )
    );
  };

  return (
    <div>
      <NewTaskform onAddTask={handleAddTask} />
      <Taskliste
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onAddSubtask={handleAddSubtask}
        onCompleteSubtask={handleCompleteSubtask}
      />
    </div>
  );
};

export default App;
