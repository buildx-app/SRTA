import React, { useState } from 'react'
import { Box, Button, Container, Typography, TextField, Link, IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
// import BlankLayout from 'src/@core/layouts/BlankLayout'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

function StudentLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100vh'
      }}
    >
      {/* <Container> */}
      <Box sx={{ maxWidth: '800px', width: '100%' }}>
        <Box sx={{ marginBottom: '30px' }}>
          <Typography
            align='center'
            sx={{
              fontSize: '21px',
              fontWeight: 700
            }}
          >
            Log In
          </Typography>
          <Typography
            align='center'
            sx={{
              fontSize: '15px',
              fontWeight: 400,
              color: '#7D7D7D'
            }}
          >
            Please sign in to your account.
          </Typography>
        </Box>
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
              User Id
            </Typography>
            <TextField
              fullWidth
              // label='User Id'
            />
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
              Passcode
            </Typography>
            <TextField
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' for visibility
              variant='outlined'
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleTogglePasswordVisibility} edge='end'>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {/* <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  padding: '5px'
                }}
              >
                Passcode
              </Typography>
              <TextField fullWidth label='Passcode' /> */}
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
              Login
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px'
            }}
          >
            <Link to='/your-link-path'>
              <Button
                size='medium'
                sx={{
                  textDecoration: 'underline',
                  color: '#0C80BF'
                }}
              >
                Click here
              </Button>
            </Link>
            {/* <Button size='medium'>Click here</Button> */}
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  )
}
// StudentLogin.getLayout = page => <BlankLayout>{page}</BlankLayout>
StudentLogin.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

StudentLogin.guestGuard = false

export default StudentLogin
