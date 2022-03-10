import React, {useCallback, useContext} from 'react';
import {useDropzone} from 'react-dropzone';
import { Icon } from '@iconify/react';

import TableContext from '../context/TableContext';

import '../styles/dragNDrop.scss';

export default function MyDropzone() {
  const { setTableData } = useContext(TableContext);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      
        const result = reader.result
        setTableData({result})
      }
      reader.readAsText(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="drop">
      <input {...getInputProps()} />
      <Icon icon="bi:download" className="drop-icon" />
      <p className="drop-paragraph">Drop a CSV file</p>
    </div>
  )
}