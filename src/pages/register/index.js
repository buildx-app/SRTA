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
import { FormLabel, Grid, MenuItem } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import axios from 'axios'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useAuth } from 'src/hooks/useAuth'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Styled Components

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary,
    fontSize: 14
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  phone: yup.number().min(10).required()
})

const RegisterPage = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hook

  const theme = useTheme()

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleSubmitRegister = async e => {
    e.preventDefault()
    console.log(values, 'values register')

    // debugger
    try {
      const response = await axios
        .post(
          'http://localhost:3001/api/register',
          {
            name: values?.name,
            email: values?.email,
            username: values?.username,
            password: values?.password,
            phone: values?.phone,
            role: values?.role
          },
          {
            headers: {
              'Content-Type': 'application/json' // Add this header,
            }
          }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
      console.log(response.data.message) // Access the response data
    } catch (error) {
      console.error('Error:', error)
    }
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
              <Typography sx={{ fontSize: '21px', fontWeight: 700, textAlign: 'center ' }}>Register</Typography>
              <Typography sx={{ fontSize: '15px', color: theme.palette.text.secondary, textAlign: 'center' }}>
                Register here for new account.
              </Typography>
            </Box>

            <form noValidate autoComplete='off' style={{ width: '100%' }} onSubmit={handleSubmitRegister}>
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Name
              </FormLabel>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    autoFocus
                    hiddenLabel
                    fullWidth
                    id='name'
                    onBlur={onBlur}
                    onChange={onChange}
                    sx={{ mb: 4 }}
                    // placeholder='Enter your email'
                  />
                )}
              />
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Username
              </FormLabel>
              <Controller
                name='username'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    autoFocus
                    hiddenLabel
                    fullWidth
                    value={value}
                    id='username'
                    onBlur={onBlur}
                    onChange={onChange}
                    sx={{ mb: 4 }}
                    // placeholder='Enter your email'
                  />
                )}
              />
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Email
              </FormLabel>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    autoFocus
                    hiddenLabel
                    fullWidth
                    id='email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    sx={{ mb: 4 }}
                    placeholder='Enter your email'
                  />
                )}
              />
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Password
              </FormLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    sx={{ mb: 1.5 }}
                    // label='Password'
                    value={value}
                    id='auth-login-password'
                    placeholder='············'
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.password)}
                    {...(errors.password && { helperText: errors.password.message })}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label='toggle password visibility'
                          >
                            <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Phone Number
              </FormLabel>
              <Controller
                name='phone'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    autoFocus
                    hiddenLabel
                    fullWidth
                    value={value}
                    type='number'
                    sx={{ mb: 4 }}
                    id='phone'
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder='202 555 0111'
                    InputProps={{
                      startAdornment: <InputAdornment position='start'>+1</InputAdornment>
                    }}
                  />
                )}
              />
              <FormLabel focused sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '30px' }}>
                Select Role
              </FormLabel>
              <CustomTextField onChange={handleChange('role')} select defaultValue='' fullWidth id='custom-select'>
                {/* <MenuItem value=''>
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'evaluator'}>Evaluator</MenuItem>
                <MenuItem value={'assistant'}>Assistant</MenuItem>
                <MenuItem value={'investigator'}>Investigator</MenuItem>
                <MenuItem value={'manager'}>Manager</MenuItem>
              </CustomTextField>
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
                <FormControlLabel control={<Checkbox />} color='secondary' label='I agree to privacy policy & terms' />
              </Box>
              <Button
                type='submit'
                variant='contained'
                sx={{ mb: '15px !important', display: 'block', m: '0px auto', maxWidth: 170, width: '100%' }}
              >
                Sign Up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Already have an account?</Typography>
                <Link
                  href='/login'
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '30px'
                  }}
                >
                  Sign in instead
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
RegisterPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
RegisterPage.guestGuard = false

export default RegisterPage
