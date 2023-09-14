// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'

// ** Custom Component Import views
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Typography } from '@mui/material'

const QuickSearchToolbar = props => {
  const { title } = props

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
      <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{title}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>Search:</Typography>{' '}
        <CustomTextField
          value={props.value}
          onChange={props.onChange}
          sx={{
            ml: { xs: 2, sm: 2 },
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
