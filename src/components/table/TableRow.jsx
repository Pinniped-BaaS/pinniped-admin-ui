import TableCell from './TableCell';
import { deleteOne } from '../../api/crud.js';

export default function TableRow({ table, row, setRows }) {
  let renderedRow = table.columns.map((column) => {
    return (
      <TableCell
        key={`${column.name}-${row.id}`}
        table={table}
        column={column}
        row={row}
        setRows={setRows}
      />
    );
  });

  const handleDelete = () => {
    deleteOne(table.id, row.id).then(() => {
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    });
  };

  return (
    <div className="tr">
      <TableCell table={table} column={{ type: 'pk', name: 'id' }} row={row} />
      {renderedRow}
      <TableCell
        table={table}
        column={{ type: 'date', name: 'created_at' }}
        row={row}
      />
      <TableCell
        table={table}
        column={{ type: 'date', name: 'updated_at' }}
        row={row}
      />
      <div onClick={handleDelete} className="row-delete">
        <i className="fa-regular fa-trash"></i>
      </div>
    </div>
  );
}
