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
    minWidth: 150,
    field: 'code',
    headerName: 'Code'
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
        <IconButton variant='outlined' sx={{ fontSize: '21px', color: '#000' }}>
          <Icon icon='tabler:trash' />
        </IconButton>
      </>
    )
  }
]

const rows = [
  {
    id: 1,
    name: 'Add Users',
    code: 'users_add',
    action: ''
  },
  {
    id: 2,
    name: 'Edit Users',
    code: 'users_edit',
    action: ''
  },
  {
    id: 3,
    name: 'Delete Users',
    code: 'users_delete',
    action: ''
  },
  {
    id: 4,
    name: 'View Users',
    code: 'users_view',
    action: ''
  },
  {
    id: 5,
    name: 'Activity Logs List',
    code: 'activity_log_list',
    action: ''
  },
  {
    id: 6,
    name: 'Acivity Log View',
    code: 'activity_log_view',
    action: ''
  },
  {
    id: 7,
    name: 'Delete Users',
    code: 'users_delete',
    action: ''
  },
  {
    id: 8,
    name: 'View Users',
    code: 'users_view',
    action: ''
  },
  {
    id: 9,
    name: 'Activity Logs List',
    code: 'activity_log_list',
    action: ''
  },
  {
    id: 10,
    name: 'Acivity Log View',
    code: 'activity_log_view',
    action: ''
  }
]

function PermissionsTable() {
  return (
    <>
      <DataGrid
        autoHeight
        rowHeight={48}
        columns={columns}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar, footer: CustomTableFooter }}
      />
    </>
  )
}

export default PermissionsTable
