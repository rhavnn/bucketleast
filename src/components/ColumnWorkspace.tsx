import StatusColumn from './StatusColumn.tsx';

function ColumnWorkspace() {
  const columns = [
    "To Do", "In Progress", "Done",
    "test 1", "test 2"
  ];

  return (
    <section className="column-workspace">
      {columns.map((colName) => (
        <StatusColumn columnName={colName}/>
      ))}
    </section>
  );
}

export default ColumnWorkspace;
