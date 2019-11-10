import React, { useState } from 'react'
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
// import xlsx from 'xlsx';
import "./ImportExcel.css";


const ImportExcel = props => {
  const [excel, setExcel] = useState([["firstname", "lastname"], ["a", "b"]]);
  const [sheet, setSheet] = useState({
    cols: [],
    rows: [],
  });

  // From SheetJS Community Edition
  // https://github.com/SheetJS/sheetjs
  const handleFile = e => {
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) return console.log(err);
      setSheet(res); 
    });
  }

  return (
    <div>
      <h1>Import Names For Events</h1>
      <input type="file" onChange={handleFile} multiple={false} />
      <OutTable data={sheet.rows} columns={sheet.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
    </div>
  );
};

export default ImportExcel;