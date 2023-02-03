import React from 'react';
import MaterialReactTable from 'material-react-table';
import { List } from '@mui/material';

const data = [
    // {
    //    STUDENTLIST:  'STUDENTLIST',
    // },
    {
      firstName: 'Maanvi',
      lastName: 'Krithi',
      city: 'Kerala',
    },
    {
      firstName: 'Thanvika',
      lastName: 'Thanu',
      city: 'Dhelhi',
    },
    {
      firstName: 'Anu',
      lastName: 'Alphones',
      city: 'Hyderabad',
    },
    {
        firstName: 'Jeeva',
        lastName: 'Sekhar',
        city: 'Rajamundry',
      },
      {
        firstName: 'Sweety',
        lastName: 'Ammu',
        city: 'Khammam',
      },
      {
        firstName: 'Chitti',
        lastName: 'Challa',
        city: 'Bejawada',
      },
  ];
const columns = [
    // {
    //     accessorKey: 'STUDENTSLIST',
    //     header: 'STUDENTSLIST',
    // },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
]

function TableComponent  ()  {
  return (
    // <MaterialReactTable 
    //     columns={columns} 
    //     data={data} 
    //     enableColumnOrdering 
    //     enableColumnActions={false}
    //     enableSorting={false}
    //     enableTopToolbar={false}
    //     enableBottomToolbar={false}
    //     />
    <MaterialReactTable 
        columns={columns} 
        data={data} 
        enableColumnOrdering 
        enableColumnActions={false}
        enableSorting={false}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        icons={{DragHandleIcon: () => <div></div> }}
        />
  );
};

export default TableComponent;

