import { React } from 'react'
import { Card, CardContent, Avatar, Box, Typography, Grid } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import StudentTable from 'src/views/dashboard/StudentTable'
import ExamsTable from 'src/views/dashboard/ExamsTable'
import TotalStudentChart from 'src/views/dashboard/TotalStudentChart'
import EarningAreaChart from 'src/views/dashboard/EarningAreaChart'

function index() {
  return (
    <>
      <Grid container spacing={6}>
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
                padding: '20px !important'
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
                  sx={{
                    fontSize: '18px',
                    lineHeight: '28px'
                  }}
                >
                  Number of Students
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    lineHeight: '28px'
                  }}
                >
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
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
                padding: '20px !important'
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
                  Number of Teacher
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
                padding: '20px !important'
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
                  Number of Employee
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
                padding: '20px !important'
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
                  Number of Revenue
                </Typography>
                <Typography variant='h6' className='card-text'>
                  2468
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Students</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <TotalStudentChart />
            </Grid>
            <Grid item xs={12} lg={8}>
              <StudentTable />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Exams</Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={8}>
              <ExamsTable />
            </Grid>
            <Grid item xs={12} lg={4}>
              <EarningAreaChart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <ExamsTable />
      </Grid>
    </>
  )
}

export default index
