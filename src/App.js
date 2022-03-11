import './App.scss';
import TableProvider from './context/TableProvider';
import DragNDrop from './components/DragNDrop';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <TableProvider>
      <Header />
      <DragNDrop />
      <Table />
    </TableProvider>
  );
}

export default App;
