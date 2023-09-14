import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import Icon from 'src/@core/components/icon'
import PermissionsTable from 'src/views/permissions/PermissionsTable'

function Index() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>Manage Permissions</Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />} onClick={handleOpen}>
          Create Permissions
        </Button>
      </Box>
      <PermissionsTable />
      <Dialog
        open={open}
        onClose={handleClose}
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
            color: '#ADADAD'
          }}
        >
          Permissions you may use and assign to your users.
        </Typography>
        <DialogContent>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            Permission Name
          </Typography>
          <FormControl component='fieldset' sx={{ width: '100%' }}>
            <TextField
              label='Enter Permission Name'
              variant='outlined'
              fullWidth
              margin='normal'
              InputProps={{
                sx: {
                  height: '50px'
                }
              }}
            />
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
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleClose}
            variant='contained'
            sx={{
              border: 'none'
            }}
          >
            Create Permission
          </Button>
          <Button
            onClick={handleClose}
            variant='outlined'
            sx={{
              backgroundColor: '#F1F1F2',
              border: 'none',
              '&:hover': {
                backgroundColor: '#0C80BF',
                border: 'none',
                color: '#ffffff'
              }
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Index
