import React, { useState } from 'react'
import QuickSearchToolbar from '../../views/table/data-grid/QuickSearchToolbar'
import CustomTableFooter from '../../views/table/data-grid/CustomTableFooter'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import { IconButton, Switch } from '@mui/material'

const rows = [
  {
    id: 1,
    code: 'REIK-3211',
    date: '2022/01/07 12:00 am - 2022/01/09 12:00 am',
    type: 'Manik',
    facility: 'Asterdio',
    status: false,
    action: ''
  },
  {
    id: 2,
    code: 'MUSC-21',
    date: '2022/01/07 12:00 am - 2022/01/09 12:00 am',
    type: 'Manik',
    facility: 'Medical University of South Carolina',
    status: false,
    action: ''
  },
  {
    id: 3,
    code: 'MUSC-22',
    date: '2022/01/07 12:00 am - 2022/01/09 12:00 am',
    type: 'Manik',
    facility: 'Asterdio',
    status: false,
    action: ''
  }
]

function ExamsTable() {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null)

  const handleStatusChange = row => {
    const updatedRows = rows.map(row => (row.id === row.id ? { ...row, status: true } : row))
    console.log(updatedRows)
  }



  const columns = [
    {
      flex: 0.25,
      minWidth: 100,
      field: 'id',
      headerName: 'ID'
    },
    {
      flex: 0.25,
      minWidth: 130,
      field: 'code',
      headerName: 'Code'
    },
    {
      flex: 0.25,
      minWidth: 430,
      field: 'date',
      headerName: 'Date'
    },
    {
      flex: 0.25,
      minWidth: 150,
      field: 'type',
      headerName: 'Type'
    },
    {
      flex: 0.25,
      minWidth: 400,
      field: 'facility',
      headerName: 'Facility'
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'status',
      headerName: 'Status',
      renderCell: row => (
        <>
          <Switch
            size='small'
            onChange={handleStatusChange}
            checked={row.status}
            // inputProps={{ 'aria-label': 'status' }}
          />
        </>
      )
    },
    {
      flex: 0.25,
      minWidth: 230,
      field: 'action',
      headerName: 'Action',
      renderCell: row => (
        <>
          <IconButton>
            <Icon icon='mingcute:edit-line' />
          </IconButton>
          <IconButton variant='outlined' sx={{ fontSize: '21px', color: '#000' }}>
            <Icon icon='tabler:trash' />
          </IconButton>
        </>
      )
    }
  ]

  return (
    <>
      <DataGrid
        autoHeight
        rowHeight={68}
        columns={columns}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar, footer: CustomTableFooter }}
        slotProps={{
          toolbar: { title: 'Exams' }
        }}
      />
    </>
  )
}

export default ExamsTable
