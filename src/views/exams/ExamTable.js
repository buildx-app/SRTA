import React, { useState, forwardRef } from 'react'
import QuickSearchToolbar from '../../views/table/data-grid/QuickSearchToolbar'
import CustomTableFooter from '../../views/table/data-grid/CustomTableFooter'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import {
  IconButton,
  Switch,
  Dialog,
  Box,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  FormControl,
  TextField,
  FormLabel
} from '@mui/material'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

import { top100Films } from 'src/@fake-db/autocomplete'

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

  const handleIconButtonClick = row => {
    setSelectedRowData(row)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 15))
  const [startDateRange, setStartDateRange] = useState(new Date())
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45))

  const handleOnChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const CustomInput = forwardRef((props, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

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
          <IconButton onClick={() => handleIconButtonClick(row)} sx={{ fontSize: '21px', color: '#000' }}>
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

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth={'lg'}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%'
            }
          }
        }}
      >
        <DialogContent>
          <Box sx={{ paddingX: '50px', paddingY: '50px' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#0C374F'
                }}
              >
                REIK-3211
              </Typography>
              <Box sx={{ border: '1px solid #DDD', padding: '20px' }}>
                <Grid container spacing={4} rowSpacing={5}>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      Exam Code
                    </Typography>
                    <TextField variant='outlined' fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      Exam Date
                    </Typography>
                    <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
                      <DatePicker
                        selectsRange
                        showTimeSelect
                        endDate={endDate}
                        selected={startDate}
                        startDate={startDate}
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy h:mm aa'
                        id='date-range-picker'
                        onChange={handleOnChange}
                        shouldCloseOnSelect={false}
                        popperPlacement={'bottom-end'}
                        customInput={<CustomInput start={startDate} end={endDate} />}
                      />
                    </DatePickerWrapper>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      Facility
                    </Typography>
                    <TextField variant='outlined' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      State
                    </Typography>

                    <TextField variant='outlined' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      Zip
                    </Typography>

                    <TextField variant='outlined' fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        marginBottom: '10px'
                      }}
                    >
                      Address
                    </Typography>

                    <TextField variant='outlined' fullWidth />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box sx={{ marginY: '50px' }}>
              <Grid sx={{ marginY: '20px' }}>
                <FormLabel
                  required
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0C374F'
                  }}
                >
                  Evaluators
                </FormLabel>

                <CustomAutocomplete
                  multiple
                  sx={{ mt: 2 }}
                  options={top100Films}
                  defaultValue={[top100Films[13]]}
                  id='autocomplete-size-medium-multi'
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => (
                    <CustomTextField
                      {...params}
                      placeholder='Favorites'
                      // sx={{ '& label': { fontSize: '20px', fontWeight: 700 } }}
                    />
                  )}
                />
              </Grid>
              <Grid sx={{ marginY: '20px' }}>
                <FormLabel
                  required
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0C374F'
                  }}
                >
                  Assistants
                </FormLabel>

                <CustomAutocomplete
                  multiple
                  sx={{ mt: 2 }}
                  options={top100Films}
                  defaultValue={[top100Films[13]]}
                  id='autocomplete-size-medium-multi'
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <CustomTextField {...params} size='medium' placeholder='Favorites' />}
                />
              </Grid>
              <Grid sx={{ marginY: '20px' }}>
                <FormLabel
                  required
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0C374F'
                  }}
                >
                  Invigilators
                </FormLabel>

                <CustomAutocomplete
                  multiple
                  sx={{ mt: 2 }}
                  options={top100Films}
                  defaultValue={[top100Films[13]]}
                  id='autocomplete-size-medium-multi'
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <CustomTextField {...params} size='medium' placeholder='Favorites' />}
                />
              </Grid>
              <Grid sx={{ marginY: '20px' }}>
                <FormLabel
                  required
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0C374F'
                  }}
                >
                  Manager
                </FormLabel>

                <CustomAutocomplete
                  options={top100Films}
                  sx={{ mt: 2 }}
                  id='autocomplete-size-medium'
                  defaultValue={top100Films[13]}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <CustomTextField {...params} size='medium' placeholder='Favorites' />}
                />
              </Grid>
            </Box>
            <DialogActions
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
              }}
            >
              <Button variant='contained' onClick={handleCloseDialog}>
                Save
              </Button>
              <Button variant='text' color='secondary' onClick={handleCloseDialog}>
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ExamsTable
