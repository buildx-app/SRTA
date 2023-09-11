import React from 'react'
import QuickSearchToolbar from '../table/data-grid/QuickSearchToolbar'
import CustomTableFooter from '../table/data-grid/CustomTableFooter'
import { DataGrid } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'

const columns = [
  {
    flex: 0.25,
    minWidth: 150,
    field: 'id',
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 150,
    field: 'name',
    headerName: 'Name'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'action',
    headerName: 'Action',
    renderCell: row => (
      <>
        <IconButton href={`/roles/edit/${row.id}`}>
          <Icon icon='mingcute:edit-line' />
        </IconButton>
      </>
    )
  }
]

const rows = [
  {
    id: 1,
    name: 'Admin',
    action: ''
  },
  {
    id: 2,
    name: 'Manger',
    action: ''
  }
]

function RolesTable() {
  return (
    <>
      <DataGrid
        autoHeight
        columns={columns}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar, footer: CustomTableFooter }}
      />
    </>
  )
}

export default RolesTable
