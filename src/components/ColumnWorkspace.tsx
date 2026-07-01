import StatusColumn from './StatusColumn.tsx';

function ColumnWorkspace() {
  const columns = [
    "To Do", "In Progress", "Done",
    // "test 1", "test 2"
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      {columns.map((colName) => (
        <StatusColumn key={colName} columnName={colName}/>
      ))}
    </div>
  );
}

export default ColumnWorkspace;