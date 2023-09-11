// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Typography } from '@mui/material'

const QuickSearchToolbar = props => {
  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: theme => theme.spacing(4, 5, 3, 5)
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>List Of Roles</Typography>
      {/* <GridToolbarFilterButton /> */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>Search:</Typography>{' '}
        <CustomTextField
          value={props.value}
          // placeholder='Search…'
          onChange={props.onChange}
          // InputProps={{
          //   startAdornment: (
          //     <Box sx={{ mr: 2, display: 'flex' }}>
          //       <Icon fontSize='1.25rem' icon='tabler:search' />
          //     </Box>
          //   ),
          //   endAdornment: (
          //     <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
          //       <Icon fontSize='1.25rem' icon='tabler:x' />
          //     </IconButton>
          //   )
          // }}
          sx={{
            ml: { xs: 2, sm: 2 },
            width: 'auto',
            // width: {
            //   xs: 1,
            //   sm: 'auto'
            // },
            '& .MuiInputBase-root > svg': {
              mr: 2
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default QuickSearchToolbar
