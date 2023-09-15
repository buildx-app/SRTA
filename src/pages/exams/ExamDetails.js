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
  DialogActions,
  FormLabel
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
            <Typography sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '30px', paddingBottom: '15px' }}>
              Exam Details
            </Typography>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Exam Code :</strong>
                <ListItemText>REIK-3211</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Exam Date :</strong>
                <ListItemText>2022/01/07 12:00 am - 2022/01/09 12:00 am</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Type :</strong>
                <ListItemText>MANIK</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Facility :</strong>
                <ListItemText>Asteroid</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>State :</strong>
                <ListItemText>KTM</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>ZIP :</strong>
                <ListItemText>46000</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Address :</strong>
                <ListItemText>Kathmandu</ListItemText>
              </ListItem>
            </Grid>
            <Grid>
              <ListItem
                sx={{
                  padding: '0'
                }}
              >
                <strong style={{ color: '#0C374F', paddingRight: '10px' }}>Manager :</strong>
                <ListItemText>Chandrakant Patel</ListItemText>
              </ListItem>
            </Grid>
          </Box>
          <Box>
            <Grid sx={{ paddingTop: '50px' }}>
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
                <TextField placeholder='Enter Evaluators ' variant='outlined' fullWidth sx={{ mt: 2 }} />
              </FormControl>
            </Grid>
            <Grid>
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
                <TextField placeholder='Enter Assistants' variant='outlined' fullWidth sx={{ mt: 2 }} />
              </FormControl>
            </Grid>
            <Grid>
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
                <TextField placeholder='Enter Invigilators' variant='outlined' fullWidth sx={{ mt: 2 }} />
              </FormControl>
            </Grid>
            <Grid>
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
                <TextField placeholder='Enter Manager Name' variant='outlined' fullWidth sx={{ mt: 2 }} />
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
              <Button variant='contained' onClick={onClose}>
                Save
              </Button>
              <Button variant='text' color='secondary' onClick={onClose}>
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
