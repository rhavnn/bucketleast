import { useState, useEffect } from 'react';

interface StatusColumnProps {
  columnName?: string;
}

function StatusColumn({ columnName = 'Untitled' }: StatusColumnProps) {
  const [tasks, setTasks] = useState([]);
  const appendTask = () => {
    setTasks(prev => [...prev, `New task (${tasks.length + 1})`]);
  };

  return (
    <div className="status-column">
      <h3 className="column-name">{columnName}</h3>
      <p className="column-task-count">({tasks.length})</p>
      <button className="new-task-button" onClick={appendTask}>
        +
      </button>
      <ul className="column-task-container">
        {tasks.map((task, index) => (
          <li className="column-task-child">{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default StatusColumn
