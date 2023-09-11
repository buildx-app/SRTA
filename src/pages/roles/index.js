import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import RolesTable from 'src/views/roles/RolesTable'

function index() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '20px'
        }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>Roles</Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />}>
          Create Role
        </Button>
      </Box>
      <RolesTable />
    </>
  )
}

export default index
