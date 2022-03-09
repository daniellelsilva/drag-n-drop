import React, {useContext, useState } from 'react';
import TableContext from '../context/TableContext';

export default function Table() {
  const { tableData } = useContext(TableContext);
  const [cellId, setCellId] = useState();
  const [cellName, setCellName] = useState();
  const [cellNumber, setCellNumber] = useState();

  const deleteItem = (e) => {
    console.log(e.target.id)
 
    let id = e.target.id
    let deleteRow = document.getElementById(id).remove();
    return deleteRow;
  };

  const createLines = () => {
    const tableContent = tableData.result;

    const rows = tableContent.split('\n').map((row) => (row.split(',')).map((info) => (info)));
    delete rows[rows.length - 1];

    const cells = rows.map((info, index) => (
      <tr key={index} id={index}>
        <td>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
        <td><button id={index} onClick={(e) => deleteItem(e)}>excluir</button></td>
      </tr>
    ));

    return cells;
    
  };

  const onChangeId = ({target}) => {
    const { value } = target;
    setCellId(value);
  };

  const onChangeName = ({target}) => {
    const { value } = target;
    setCellName(value);
  };

  const onChangeNumber = ({target}) => {
    const { value } = target;
    setCellNumber(value);
  };

  const addRow = () => {
    let table = document.getElementById('table');
    const newRow = table.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);

    var tr = document.querySelectorAll('tr');

    var button = document.createElement("button")
    button.id = tr.length - 1;
    button.innerHTML = "excluir";
    button.onclick = ((e) => deleteItem(e));
    newCell4.appendChild(button);

    newRow.id = tr.length - 1;
    newCell.innerHTML = cellId;
    newCell2.innerHTML = cellName;
    newCell3.innerHTML = cellNumber;
  };

  return (
    <div>
      Table  

      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody id="table">
        {tableData.result !== undefined && (
              createLines()
            )}
        </tbody>
      </table>

      <div>
        <input type="number" onChange={ onChangeId } name="id" />
        <input type="text" onChange={ onChangeName } name="fullName" />
        <input type="text" onChange={ onChangeNumber } name="number" />
        <button type='button' id="btn" onClick={ addRow }>Add</button>
      </div>

    </div>
  )
}