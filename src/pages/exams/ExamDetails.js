import React from 'react'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Grid,
  ListItem,
  ListItemText,
  FormControl,
  TextField,
  DialogActions
} from '@mui/material'

function ExamDetails({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
          <Box sx={{ border: '1px solid ', padding: '15px' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '30px' }}>Exam Details</Typography>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Exam Code:</strong>
                <ListItemText>REIK-3211</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Exam Date:</strong>
                <ListItemText>2022/01/07 12:00 am - 2022/01/09 12:00 am</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Type:</strong>
                <ListItemText>MANIK</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Facility:</strong>
                <ListItemText>Asteroid</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>State:</strong>
                <ListItemText>KTM</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>ZIP:</strong>
                <ListItemText>46000</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Address:</strong>
                <ListItemText>Kathmandu</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong>Manager:</strong>
                <ListItemText>Chandrakant Patel</ListItemText>
              </ListItem>
            </Grid>
          </Box>
          <Box>
            <Grid sx={{ paddingTop: '50px' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}
              >
                Evaluators *
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
                <TextField label='Enter Permission Name' variant='outlined' fullWidth />
              </FormControl>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}
              >
                Assistants *
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
                <TextField label='Enter Permission Name' variant='outlined' fullWidth />
              </FormControl>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}
              >
                Invigilators *
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
                <TextField label='Enter Permission Name' variant='outlined' fullWidth />
              </FormControl>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '5px'
                }}
              >
                Manager *
              </Typography>
              <FormControl
                component='fieldset'
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <TextField label='Enter Permission Name' variant='outlined' fullWidth />
              </FormControl>
            </Grid>
            <DialogActions
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
              }}
            >
              <Button variant='contained'>Save</Button>
              <Button variant='text' color='secondary'>
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ExamDetails
