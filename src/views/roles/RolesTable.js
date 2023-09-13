import React, { useState } from 'react'
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

function RolesTable() {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const handleDialog = () => {
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
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
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color='red'
                      label='Select All'
                    />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>User Management</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.input.light}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Content Management</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Deputes Management</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Financial Management</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Reporting</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>API Control</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>{' '}
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Repository Management</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>{' '}
                <TableRow sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                  <TableCell>Payroll</TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Read'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Write'
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <FormControlLabel
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={<Checkbox />}
                      color={theme => theme.palette.text.secondary}
                      label='Create'
                    />
                  </TableCell>
                </TableRow>{' '}
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
