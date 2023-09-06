import React from 'react'
import { Grid } from '@mui/material'
import TotalStudentChart from 'src/views/dashboard/TotalStudentChart'

function index() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <TotalStudentChart />
        </Grid>
        <Grid item xs={12} lg={8}>
          <h2>second part</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default index
