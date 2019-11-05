import React, { useState } from 'react'
import XLSX from 'xlsx';

// From SheetJS Community Edition
// https://github.com/SheetJS/sheetjs
function handleFile(e, setExcel) {
    const files = e.target.files, f = files[0];
    const reader = new FileReader();
    const result = []
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      console.log(workbook);
      /* DO SOMETHING WITH workbook HERE */
      const sheetNames = workbook.SheetNames;
      const sheet = workbook.Sheets[sheetNames[0]];
      const length = Object.keys(sheet).length;
      for (let i = 0; i < (length-2)/2; i++){
        result.push([sheet["A"+(i+1)]["v"], sheet["B"+(i+1)]["v"]]);
      }
      setExcel(result);
    };
    reader.readAsArrayBuffer(f);
}


const ImportExcel = props => {
  const [excel, setExcel] = useState([["firstname", "lastname"], ["a", "b"]]);

  return (
    <div>
      <h1>Import Names For Events</h1>
      <input type="file" onChange={e => handleFile(e, setExcel)}></input>
      <ul>
        {excel.map(name => <li key={name}>{name[0]} {name[1]}</li>)}
      </ul>
    </div>
    );
};

export default ImportExcel;