import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function CustomTableFooter() {
  return (
    <>
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: theme => theme.spacing(3, 5, 4, 5)
        }}
      >
        <Typography variant='p'> Showing 1 to 2 of 2 entries</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='outlined' size='small'>
            Previous
          </Button>{' '}
          <Button variant='outlined' size='small'>
            Next
          </Button>{' '}
        </Box>
      </Box>
    </>
  )
}

export default CustomTableFooter
