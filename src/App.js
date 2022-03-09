import './App.scss';
import TableProvider from './context/TableProvider';
import DragNDrop from './components/DragNDrop';
import Table from './components/Table';

function App() {
  return (
    <TableProvider>
      <DragNDrop />
      <Table />
    </TableProvider>
  );
}

export default App;
