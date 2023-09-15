import React, { useState, useEffect } from 'react'
import QuickSearchToolbar from '../table/data-grid/QuickSearchToolbar'
import CustomTableFooter from '../table/data-grid/CustomTableFooter'
import { DataGrid } from '@mui/x-data-grid'
import {
  IconButton,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  FormControlLabel,
  Checkbox,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from '@mui/material'
import Icon from 'src/@core/components/icon'

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

const rolesArr = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

function RolesTable() {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [selectedCheckbox, setSelectedCheckbox] = useState([])
  const [isIndeterminateCheckbox, setIsIndeterminateCheckbox] = useState(false)

  const handleDialog = () => {
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

  const togglePermission = id => {
    const arr = selectedCheckbox
    if (selectedCheckbox.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
      setSelectedCheckbox([...arr])
    } else {
      arr.push(id)
      setSelectedCheckbox([...arr])
    }
  }

  const handleSelectAllCheckbox = () => {
    if (isIndeterminateCheckbox) {
      setSelectedCheckbox([])
    } else {
      rolesArr.forEach(row => {
        const id = row.toLowerCase().split(' ').join('-')
        togglePermission(`${id}-read`)
        togglePermission(`${id}-write`)
        togglePermission(`${id}-create`)
      })
    }
  }
  useEffect(() => {
    if (selectedCheckbox.length > 0 && selectedCheckbox.length < rolesArr.length * 3) {
      setIsIndeterminateCheckbox(true)
    } else {
      setIsIndeterminateCheckbox(false)
    }
  }, [selectedCheckbox])

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
          <IconButton sx={{ fontSize: '21px', color: '#000' }} onClick={() => handleDialog(row)}>
            <Icon icon='mingcute:edit-line' />
          </IconButton>
        </>
      )
    }
  ]

  return (
    <>
      <DataGrid
        autoHeight
        disableRowSelectionOnClick
        columns={columns}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar, footer: CustomTableFooter }}
        slotProps={{
          toolbar: { title: 'List of Roles' }
        }}
      />
      <Dialog
        maxWidth={'lg'}
        onClose={handleClose}
        open={isDialogOpen}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              padding: '70px',
              width: '100%'
            }
          }
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Add Roles
        </DialogTitle>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 400,
            color: '#ADADAD',
            marginBottom: '25px'
          }}
        >
          Set Role Permissions{' '}
        </Typography>
        <DialogContent>
          <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '11px' }}>Role Name</Typography>
          <Box sx={{ fontSize: '18px', color: '#7D7D7D', border: '1px solid #DDD', p: '9px 13px', mb: '28px' }}>
            Admin
          </Box>
          <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '30px' }}>Role Permissions</Typography>

          <TableContainer>
            <Table
              sx={{
                minWidth: '100%',
                border: '0px',
                '& .MuiTableCell-root': {
                  fontSize: '18px',
                  color: '#7D7D7D '
                },
                '& .MuiTableCell-head': {
                  background: '#FFF !important'
                }
              }}
              aria-label='simple table'
              stickyHeader
            >
              <TableHead>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>
                    <Box sx={{ fontSize: '18px', color: '#7D7D7D', display: 'flex', alignItems: 'center', gap: 1 }}>
                      Administrator Access <Icon icon='heroicons:information-circle' />
                    </Box>
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      label='Select All'
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={
                        <Checkbox
                          onChange={handleSelectAllCheckbox}
                          indeterminate={isIndeterminateCheckbox}
                          // indeterminateicon={<IndeterminateCheckBoxIcon />}
                          checked={selectedCheckbox.length === rolesArr.length * 3}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rolesArr.map((i, index) => {
                  const id = i.toLowerCase().split(' ').join('-')

                  return (
                    <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }} key={index}>
                      <TableCell>{i}</TableCell>
                      <TableCell>
                        {' '}
                        <FormControlLabel
                          label='Read'
                          sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              id={`${id}-read`}
                              onChange={() => togglePermission(`${id}-read`)}
                              checked={selectedCheckbox.includes(`${id}-read`)}
                            />
                          }
                        />
                      </TableCell>
                      <TableCell>
                        {' '}
                        <FormControlLabel
                          label='Write'
                          sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              id={`${id}-write`}
                              onChange={() => togglePermission(`${id}-write`)}
                              checked={selectedCheckbox.includes(`${id}-write`)}
                            />
                          }
                        />
                      </TableCell>
                      <TableCell>
                        {' '}
                        <FormControlLabel
                          label='Create'
                          sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              id={`${id}-create`}
                              onChange={() => togglePermission(`${id}-create`)}
                              checked={selectedCheckbox.includes(`${id}-create`)}
                            />
                          }
                        />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <Button variant='contained' onClick={handleClose}>
            Submit
          </Button>
          <Button variant='text' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RolesTable
