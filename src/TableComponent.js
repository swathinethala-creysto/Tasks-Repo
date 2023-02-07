// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGridPro } from '@mui/x-data-grid-pro';

// const columns = [
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 350,
//     editable: false,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 350,
//     editable: false,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     width: 300,
//     editable: false,
//   }
  
// ];

// const rows = [
//   { id: 1, lastName: 'Ammu', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'King', firstName: 'Jeeva', age: 42 },
//   { id: 3, lastName: 'Keerthi', firstName: 'Jon', age: 20 },
//   { id: 4, lastName: 'Akshay', firstName: 'Kumar', age: 25 },
//   { id: 5, lastName: 'Avinash', firstName: 'Challa', age: 30 },
// ];

// function TableComponent() {
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGridPro
//         rows={rows}
//         columns={columns}
//         paging={false}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//       />
//     </Box>
//   );
// }   
// export default TableComponent;
import * as React from 'react';
import MUIDataTable from "mui-datatables";

const columns = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: false,
    sort: false,
    draggable:true,
   }
  },
  {
   name: "company",
   label: "Company",
   options: {
    filter: false,
    sort: false,
    draggable :true,
   }
  },
  {
   name: "city",
   label: "City",
   options: {
    filter: false,
    sort: false,
    
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: false,
    sort: false,
    
   }
  },
 ];
 

const data = [
 ["John James", "TataConsultancy", "Hyderabad", "TS"],
 ["Alphones", "Cognizant", "Banglore", "KT"],
 ["Bob Merlyn", "TechMahindra", "Chennai", "TN"],
 ["Jhon Paul", "Capgemini", "Delhi", "TX"],
];

const options = {
  filter:false,
  filterType: false,
  draggableColumns:{enabled:true,transitionTime:500},
  disableToolbarSelect:false,

};

function TableComponent() {


  return (
    <MUIDataTable
  data={data}
  columns={columns}
  options={options}
  
/>
  );
}   
export default TableComponent;

