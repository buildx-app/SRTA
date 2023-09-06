import React from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'
import TableBasic from '../table/data-grid/TableBasic'

const columns = [
  {
    flex: 0.25,
    minWidth: 120,
    field: 'studentname',
    headerName: 'Student Name'
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'examcode',
    headerName: 'Exam Code'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'section',
    headerName: 'Section'
  },

  {
    flex: 0.15,
    minWidth: 120,
    field: 'register',
    headerName: 'Register',
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
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 2,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 3,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 4,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 5,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 6,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 7,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 8,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 9,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  },
  {
    id: 10,
    studentname: 'dfgsdf',
    examcode: 'sdfsdf ',
    section: 'xyx@gmail.com',
    register: ''
  }
]

function StudentTable() {
  return (
    <>
      <Box sx={{ height: '100%' }}>
        <TableBasic rowHeight={63} columns={columns} rows={rows} hideFooter />
      </Box>
    </>
  )
}

export default StudentTable
