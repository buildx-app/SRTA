import React, { useState } from 'react'
import { Box, Button, Container, Typography, TextField } from '@mui/material'
import BlankLayout from 'src/@core/layouts/BlankLayout'

function StudentLogin() {
  return (
    <Box
      sx={{
       marginTop:"15%"
      }}
    >
      <Container maxWidth='sm'>
        <Box mt={5}>
          <Typography variant='h4' align='center'>
            Confirm Student Detail and Start Exam
          </Typography>
          <Box
            sx={{
              padding: '20px',
              background: '#FFF',
              boxShadow: '0px 4px 44px 0px rgba(0, 0, 0, 0.10)'
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                padding: '10px'
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  padding: '5px'
                }}
              >
                Student Name
              </Typography>
              <TextField fullWidth label='Student Name' />
            </Box>

            <Box
              sx={{
                maxWidth: '100%',
                padding: '10px'
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  padding: '5px'
                }}
              >
                Student ID
              </Typography>
              <TextField fullWidth label='Student ID' />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px'
              }}
            >
              <Button
                variant='contained'
                sx={{
                  border: 'none'
                }}
              >
                Start Exam
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
StudentLogin.getLayout = page => <BlankLayout>{page}</BlankLayout>
StudentLogin.guestGuard = false

export default StudentLogin
