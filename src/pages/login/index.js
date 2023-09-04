// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { FormLabel, Grid } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import axios from 'axios'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Styled Components

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary,
    fontSize: 14
  }
}))

const LoginPage = () => {
  // ** Hook

  const theme = useTheme()

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleSubmit = () => {
    try {
      axios
        .post(
          'http://localhost:3001/login',
          { email: values.email, password: values.password },
          { headers: { 'Content-Type': 'json' } }
        )
        .then(res => {
          console.log(res, 'res')
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {}
  }

  return (
    <Grid container spacing={0} sx={{ minHeight: '100vh', height: '100%' }}>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignitems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Box sx={{ maxWidth: 441, width: '100%', height: 'auto', overflow: 'hidden', m: '0px auto' }}>
            <img
              src='/images-srpa/logo.png'
              alt='user-img'
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            />{' '}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: 'customColors.bodyBg',
            padding: '30px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 640,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ mb: '3rem' }}>
              <Typography sx={{ fontSize: '21px', fontWeight: 700, textAlign: 'center ' }}>Sign In</Typography>
              <Typography sx={{ fontSize: '15px', color: theme.palette.text.secondary, textAlign: 'center' }}>
                Please sign in to your account.
              </Typography>
            </Box>

            <form noValidate autoComplete='off' style={{ width: '100%' }} onSubmit={handleSubmit}>
              <FormLabel focused required sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Email
              </FormLabel>
              <CustomTextField
                autoFocus
                hiddenLabel
                fullWidth
                id='email'
                sx={{ mb: 4 }}
                placeholder='Enter your email'
              />
              <FormLabel focused required sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Password
              </FormLabel>
              <CustomTextField
                fullWidth
                sx={{ mb: 1.5 }}
                // label='Password'
                value={values.password}
                id='auth-login-password'
                placeholder='············'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#9F9F9F'
                }}
              >
                <FormControlLabel control={<Checkbox />} color={theme.palette.text.secondary} label='Remember Me' />
                <Link
                  href='/forgot-password'
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '28px'
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <Button
                type='submit'
                variant='contained'
                sx={{ mb: '15px !important', display: 'block', m: '0px auto', maxWidth: 170, width: '100%' }}
              >
                Login
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Don’t have an account?</Typography>
                <Link
                  href='/register'
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '30px'
                  }}
                >
                  Sign Up
                </Link>
              </Box>
            </form>
          </Box>
          <Typography variant='p' color='text.secondary' sx={{ fontSize: '15px' }}>
            {' '}
            © 2023 All Rights Reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = false

export default LoginPage
