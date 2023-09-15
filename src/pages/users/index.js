import React, { useState } from 'react'
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material'
import UserTable from 'src/views/users/UsersTable'
import Icon from 'src/@core/components/icon'

function index() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Users</Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />} onClick={handleOpen}>
          Add New
        </Button>
      </Box>
      <UserTable />
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
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Create Users
        </DialogTitle>
        <DialogContent>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '10px'
              }}
            >
              Add Users
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            First Name
          </Typography>
          <TextField
            placeholder='Enter First Name'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            Last Name
          </Typography>
          <TextField
            placeholder='Enter Last Name'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            Username
          </Typography>
          <TextField
            placeholder='Enter Username'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            Email
          </Typography>
          <TextField
            placeholder='Enter Email'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            Phone
          </Typography>
          <TextField
            placeholder='Enter Phone'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '10px'
            }}
          >
            Role(S)
          </Typography>
          <TextField
            placeholder='Enter Role'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                height: '50px'
              }
            }}
          />

          <DialogActions sx={{ justifyContent: 'center', marginTop: '15px' }}>
            <Button
              onClick={handleClose}
              variant='contained'
              sx={{
                border: 'none'
              }}
            >
              Create Users
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
        </DialogContent>
      </Dialog>
    </>
  )
}

export default index
