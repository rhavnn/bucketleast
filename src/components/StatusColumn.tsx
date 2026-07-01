import { useState } from 'react';

interface StatusColumnProps {
  columnName?: string;
  taskCount?: number;
}

function StatusColumn({ columnName = 'Untitled', taskCount = 0 }: StatusColumnProps) {
  const [count, setCount] = useState(taskCount);
  const increaseTaskCount = () => setCount(prev => prev + 1);

  return (
    <div className="status-column">
      <h3 className="column-name">{columnName}</h3>
      <p className="column-task-count">({count})</p>
      <button className="new-task-button" onClick={increaseTaskCount}>
        +
      </button>
      <ul>
        <li>Example</li>
      </ul>
    </div>
  )
}

export default StatusColumn