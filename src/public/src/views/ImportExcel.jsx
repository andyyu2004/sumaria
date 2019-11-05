import React, { useState } from 'react'
import XLSX from 'xlsx';

// From SheetJS Community Edition
// https://github.com/SheetJS/sheetjs
function handleFile(e, setExcel) {
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    var result = []
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, {type: 'array'});
      console.log(workbook);
      /* DO SOMETHING WITH workbook HERE */
      var sheetNames = workbook.SheetNames;
      var sheet = workbook.Sheets[sheetNames[0]];
      var length = Object.keys(sheet).length;
      for (var i=0; i < (length-2)/2; i++){
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