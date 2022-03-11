import React, {useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import TableContext from '../context/TableContext';

import '../styles/table.scss';
import '../styles/components/buttons.scss';

export default function Table() {
  const { tableData, setTableData } = useContext(TableContext);
  const [cellData, setCellData] = useState({id: '', fullName: '', number: '' });

  const deleteItem = (e) => { 
    let id = e.target.id
    let deleteRow = document.getElementById(id).remove();
    return deleteRow;
  };

  const createLines = () => {
      const cells = tableData.map((info, index) => (
      <tr className="table-columns" key={index} id={index}>
        <td>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
        <td className="table-delete">
          <button className="round-btn" id={index} onClick={(e) => deleteItem(e)}>
            <Icon icon="bytesize:trash" className="table-input-icon delete-icon" id={index} />
             
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
    const cells = Object.values(cellData);

    setTableData((prevState) => {
      const newRow = cells;
      return [...prevState, newRow]
    })
  };

  return (
    <div className="table-section">
      <table className="table" cellSpacing="0">
        <thead>
          <tr className="table-header">
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table">
        {tableData !== undefined && (
              createLines()
            )}
        </tbody>
      </table>

      <div className="table-input">
        <input
          className="table-input-all table-input-all-1"
          type="number"
          onChange={ onChange }
          name="id"
          placeholder="ID"
        />
        <input
          className="table-input-all table-input-all-2"
          type="text"
          onChange={ onChange }
          name="fullName"
          placeholder="Full name"
        />
        <input
          className="table-input-all table-input-all-3"
          type="text"
          onChange={ onChange }
          name="number"
          placeholder="Phone"
        />
        <button
          className="round-btn table-input-btn"
          type='button'
          onClick={ addRow }
        >
          <Icon className="table-input-icon add-btn" icon="fluent:add-16-filled" />
        </button>
      </div>

    </div>
  )
}