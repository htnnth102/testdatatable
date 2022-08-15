import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ReactDOM from "react-dom";
import {useEffect, useState} from "react";



export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('app use effect!!');
    let url = 'http://localhost:8080/api/v1/bikes?select=station.stationID';
     console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
  }, []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'bikeName', headerName: 'Bike name', width: 130 },
    { field: 'station', headerName: 'Station name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 }
  ];


  return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
      </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);