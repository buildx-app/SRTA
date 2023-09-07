import Link from 'next/link'

import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box, IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'
import TableBasic from '../table/data-grid/TableBasic'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: `${theme.palette.primary.main} !important`
}))

const columns = [
  {
    flex: 0.25,
    minWidth: 120,
    field: 'examname',
    headerName: 'Exam Name',
    renderCell: ({ row }) => (
      <Typography component={LinkStyled} href={`/`}>
        {row.examname}
      </Typography>
    )
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
    renderCell: () => <StatusFormatter />
  }
]
const StatusFormatter = () => (
  <IconButton variant='outlined' color='success' sx={{ fontSize: '21px' }}>
    <Icon icon='lucide:check-circle' />
  </IconButton>
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
      <Box sx={{ height: { xs: 350, lg: '100%' } }}>
        <TableBasic columns={columns} rows={rows} hideFooter />
      </Box>
    </>
  )
}

export default ExamsTable
