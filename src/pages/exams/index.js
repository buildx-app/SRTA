import React, { useState } from 'react'
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, Input, FormLabel } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { DataGrid } from '@mui/x-data-grid'
import ExamsTable from '../../views/exams/ExamTable'
import ExamDetails from './ExamDetails'
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

function Index() {
  const [open, setOpen] = useState(false)
  const [openImport, setOpenImport] = useState(false)

  const handleOpenImport = () => {
    console.log('work')
    setOpenImport(true)
  }

  const handleCloseImport = () => {
    setOpenImport(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
      minWidth: 500,
      field: 'date',
      headerName: 'Date'
    },
    {
      flex: 0.25,
      minWidth: 100,
      field: 'type',
      headerName: 'Type'
    },
    {
      flex: 0.25,
      minWidth: 100,
      field: 'button',
      headerName: '',
      renderCell: row => (
        <>
          <Button variant='contained' size='small' onClick={handleOpenImport}>
            Import
          </Button>
        </>
      )
    }
  ]

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '20px'
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Exams
        </Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />} onClick={handleOpen}>
          Create New Exams
        </Button>
      </Box>
      <ExamsTable />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"lg"}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
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
          Create Exams
        </DialogTitle>
        <DialogContent>
          <Box>
            <DataGrid
              autoHeight
              rowHeight={68}
              columns={columns}
              rows={rows}
              hideFooter
            />
          </Box>
        </DialogContent>
      </Dialog>
      <ExamDetails open={openImport} onClose={handleCloseImport} />
    </>
  )
}

export default Index
