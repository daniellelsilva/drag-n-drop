import React, {useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import TableContext from '../context/TableContext';

import '../styles/table.scss';
import '../styles/components/buttons.scss';

export default function Table() {
  const { tableData, setTableData } = useContext(TableContext);
  const [cellData, setCellData] = useState({id: '', fullName: '', number: '' });
  const [tableRows, setTableRows] = useState();

  let rows = [];

  useEffect(() => {
    return () => {
      setTableRows(rows);
    }
  }, [])

  const deleteItem = (e) => {
    console.log(e.target.id)
 
    let id = e.target.id
    let deleteRow = document.getElementById(id).remove();
    return deleteRow;
  };

  const createLines = () => {
    const tableContent = tableData.result;

    const tableString = tableContent.split('\n');


    rows = tableString.map((row) => (row.split(',')).map((info) => (info)));
    delete rows[rows.length - 1];
    // setTableRows(rows);
    console.log(rows);
    console.log(tableRows)

    const cells = rows.map((info, index) => (
      <tr className="table-columns" key={index} id={index}>
        <td className='vv'>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
        <td className="table-delete">
          <button className="round-btn" id={index} onClick={(e) => deleteItem(e)}>
            <Icon icon="clarity:trash-line" className="table-icon" />
          </button>
        </td>
      </tr>
    ));

    return cells;
    
  };

  const onChange = ({target}) => {
    const {name} = target;
    const {value} = target;
    setCellData({...cellData, [name]: value,})
  }

  const addRow = () => {
    const tableContent = tableData.result;
    console.log(rows)
    console.log(tableRows)
    const cells = Object.values(cellData);

    // setSelectColumns((prevState) => {
    //   const newState = prevState.filter((select) => select !== column);
    //   setColumn(newState[0]);
    //   return newState;
    // });

    // setTableData(rows.push(cells))

    // setTableData([...tableData, cellId, cellName, cellNumber])


    // let table = document.getElementById('table');
    // const newRow = table.insertRow(-1);
    // let newCell = newRow.insertCell(0);
    // let newCell2 = newRow.insertCell(1);
    // let newCell3 = newRow.insertCell(2);
    // let newCell4 = newRow.insertCell(3);

    // var tr = document.querySelectorAll('tr');

    // var button = document.createElement("button")
    // button.id = tr.length - 1;
    // button.className = "delete-btn"
    // button.innerHTML = "<span class='iconify teste' data-icon='clarity:trash-line'></span>"
    // button.onclick = ((e) => deleteItem(e));
    // newCell4.appendChild(button);

    // newRow.id = tr.length - 1;
    // newCell.innerHTML = cellId;
    // newCell2.innerHTML = cellName;
    // newCell3.innerHTML = cellNumber;

  };

  return (
    <div className="table-section">
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table">
        {tableData.result !== undefined && (
              createLines()
            )}
        </tbody>
      </table>

      <div className="table-inputs">
        <input className="table-input" type="number" onChange={ onChange } name="id" />
        <input className="table-input" type="text" onChange={ onChange } name="fullName" />
        <input className="table-input" type="text" onChange={ onChange } name="number" />
        <button className="round-btn table-add-btn" type='button' id="btn" onClick={ addRow }>
          <Icon className="table-icon" icon="fluent:text-bullet-list-add-24-regular" />
        </button>
      </div>

    </div>
  )
}