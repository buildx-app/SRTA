import { React } from 'react'
import { Card, CardContent, Avatar, Box, Typography, Grid } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import StudentTable from 'src/views/dashboard/StudentTable'
import ExamsTable from 'src/views/dashboard/ExamsTable'

function index() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            className='card'
            style={{
              backgroundColor: '#CBF1FF',
              border: '0px'
            }}
          >
            <CardContent
              fullwidth
              className='card-box'
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px'
              }}
            >
              <Avatar
                className='card-avatar'
                sx={{
                  bgcolor: '#ffffff',
                  width: '70px',
                  height: '70px',
                  padding: '15px',
                  marginRight: '15PX'
                }}
                src='/images/avatars-new/Students.svg'
              />

              <Box
                sx={{
                  textAlign: 'center',
                  flexGrow: 1,
                  borderLeft: '1px solid #D9D9D9'
                }}
              >
                <Typography
                  variant='h6'
                  className='card-text'
                  sx={{
                    lineHeight: '28px'
                  }}
                >
                  Number of Students
                </Typography>
                <Typography variant='h6' className='card-text'>
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            className='card'
            style={{
              backgroundColor: '#D8EAD1',
              border: '0px'
            }}
          >
            <CardContent
              fullwidth
              className='card-box'
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px'
              }}
            >
              <Avatar
                className='card-avatar'
                sx={{
                  bgcolor: '#ffffff',
                  width: '70px',
                  height: '70px',
                  padding: '15px',
                  marginRight: '15PX'
                }}
                src='/images/avatars-new/Teacher.svg'
              />

              <Box
                sx={{
                  textAlign: 'center',
                  flexGrow: 1,
                  borderLeft: '1px solid #D9D9D9'
                }}
              >
                <Typography
                  variant='h6'
                  className='card-text'
                  sx={{
                    lineHeight: '28px'
                  }}
                >
                  Number of Students
                </Typography>
                <Typography variant='h6' className='card-text'>
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            className='card'
            style={{
              backgroundColor: '#DFE4F4',
              border: '0px'
            }}
          >
            <CardContent
              fullwidth
              className='card-box'
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px'
              }}
            >
              <Avatar
                className='card-avatar'
                sx={{
                  bgcolor: '#ffffff',
                  width: '70px',
                  height: '70px',
                  padding: '15px',
                  marginRight: '15PX'
                }}
                src='/images/avatars-new/Employee.svg'
              />

              <Box
                sx={{
                  textAlign: 'center',
                  flexGrow: 1,
                  borderLeft: '1px solid #D9D9D9'
                }}
              >
                <Typography
                  variant='h6'
                  className='card-text'
                  sx={{
                    lineHeight: '28px'
                  }}
                >
                  Number of Students
                </Typography>
                <Typography variant='h6' className='card-text'>
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            className='card'
            style={{
              backgroundColor: '#CEF3DC',
              border: '0px'
            }}
          >
            <CardContent
              fullwidth
              className='card-box'
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px'
              }}
            >
              <Avatar
                className='card-avatar'
                sx={{
                  bgcolor: '#ffffff',
                  width: '70px',
                  height: '70px',
                  padding: '15px',
                  marginRight: '15PX'
                }}
                src='/images/avatars-new/Revenue.svg'
              />

              <Box
                sx={{
                  textAlign: 'center',
                  flexGrow: 1,
                  borderLeft: '1px solid #D9D9D9'
                }}
              >
                <Typography
                  variant='h6'
                  className='card-text'
                  sx={{
                    lineHeight: '28px'
                  }}
                >
                  Number of Students
                </Typography>
                <Typography variant='h6' className='card-text'>
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8}>
          <StudentTable />
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <ExamsTable />
      </Grid>
    </>
  )
}

export default index
