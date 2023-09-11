import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import UserTable from 'src/views/users/UsersTable'
import Icon from 'src/@core/components/icon'
import Icon from 'src/@core/components/icon'

function index() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Users</Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />}>
          Add New
        </Button>
      </Box>

      <UserTable />
    </>
  )
}

export default index
