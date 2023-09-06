import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import UserTable from 'src/views/users/UsersTable'

function index() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
        <Typography>Users</Typography>
        <Button>Add New</Button>
      </Box>

      <UserTable />
    </>
  )
}

export default index
