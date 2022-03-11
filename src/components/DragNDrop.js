import React, {useCallback, useContext} from 'react';
import {useDropzone} from 'react-dropzone';
import { Icon } from '@iconify/react';

import TableContext from '../context/TableContext';

import '../styles/dragNDrop.scss';

const formats_files = ['txt', 'csv']

export default function MyDropzone() {
  const { setTableData } = useContext(TableContext);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if(!formats_files.includes(file.path.split('.', 2)[1])) return alert('Arquivo inválido!');
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      
        const result = reader.result;

        const tableString = result.split('\n');

        const rows = tableString.map((row) => (row.split(',')));
        // delete rows[rows.length - 1];
        rows.pop();
        setTableData(rows);
      }
      reader.readAsText(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: '.csv'})

  return (
    <div {...getRootProps()} className="drop">
      <input {...getInputProps()} />
      <Icon icon="bi:download" className="drop-icon" />
      <p className="drop-paragraph">Drop a CSV file</p>
    </div>
  )
}
