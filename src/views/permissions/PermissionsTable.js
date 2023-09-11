import React, { useState } from 'react'
import QuickSearchToolbar from '../table/data-grid/QuickSearchToolbar'
import CustomTableFooter from '../table/data-grid/CustomTableFooter'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Alert,
  Box
} from '@mui/material'

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
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null)

  const handleIconButtonClick = rowData => {
    setSelectedRowData(rowData)
    setDialogOpen(true)
  }

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
          <IconButton onClick={() => handleIconButtonClick(row)}>
            <Icon icon='mingcute:edit-line' />
          </IconButton>
          <IconButton variant='outlined' sx={{ fontSize: '21px', color: '#000' }}>
            <Icon icon='tabler:trash' />
          </IconButton>
        </>
      )
    }
  ]

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }
  return (
    <>
      <DataGrid
        autoHeight
        rowHeight={48}
        columns={columns}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar, footer: CustomTableFooter }}
      />
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%'
            }
          }
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '580px',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Add New Permission
        </DialogTitle>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 400,
            color: '#ADADAD',
            marginBottom: '25px'
          }}
        >
          Permissions you may use and assign to your users.
        </Typography>
        <DialogContent>
          <Box>
            <Alert
              variant='outlined'
              severity='warning'
              sx={{
                marginBottom: '20px',
                backgroundColor: '#FFF0E1'
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#FFA147'
                  }}
                >
                  Warning!
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFA147'
                  }}
                >
                  By editing the permission name, you might break the system permissions functionality. Please ensure
                  you're absolutely certain before proceeding.
                </Typography>
              </Box>
            </Alert>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '10px'
              }}
            >
              Permission Name
            </Typography>
            <FormControl
              component='fieldset'
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              <TextField
                label='Enter Permission Name'
                variant='outlined'
                fullWidth
                InputProps={{
                  sx: {
                    height: '50px'
                  }
                }}
              />
              <Button
                onClick={handleCloseDialog}
                variant='contained'
                sx={{
                  border: 'none',
                  marginLeft: '25px'
                }}
              >
                Update
              </Button>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value='read' />}
              label='Set as core permission'
              sx={{
                fontSize: '18px',
                fontWeight: 400,
                '& .MuiFormControlLabel-label': {
                  color: '#ADADAD'
                }
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PermissionsTable