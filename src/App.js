import './App.css';
import TableProvider from './context/TableProvider';
import DragNDrop from './pages/DragNDrop';
import Table from './pages/Table';

function App() {
  return (
    <TableProvider>
      <DragNDrop />
      <Table />
    </TableProvider>
  );
}

export default App;
