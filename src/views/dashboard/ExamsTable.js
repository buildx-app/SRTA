import React from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'
import TableBasic from '../table/data-grid/TableBasic'

const columns = [
  {
    flex: 0.25,
    minWidth: 120,
    field: 'examname',
    headerName: 'Exam Name'
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'code',
    headerName: 'Code'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'startdate',
    headerName: 'Start Date'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'enddate',
    headerName: 'End Date'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'active',
    headerName: 'Active',
    sortable: false,
    renderCell: () => <ActionOptions />
  }
]
const ActionOptions = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IconButton variant='outlined' sx={{ fontSize: '21px' }}>
      <Icon icon='tabler:circle-check' />
    </IconButton>
  </Box>
)
const rows = [
  {
    id: 1,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 2,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 3,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 4,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 5,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 6,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 7,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 8,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 9,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  },
  {
    id: 10,
    examname: 'dfgsdf',
    code: 'sdfsdf ',
    startdate: 'xyx@gmail.com',
    enddate: 'xyx@gmail.com',
    active: ''
  }
]

function ExamsTable() {
  return (
    <>
      <Box sx={{ height: '100%' }}>
        <TableBasic columns={columns} rows={rows} hideFooter />
      </Box>
    </>
  )
}

export default ExamsTable
