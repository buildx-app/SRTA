// ** MUI Import
import { useTheme } from '@mui/material/styles'

const CheckedIcon = () => {
  const theme = useTheme()

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z'
        fill={theme.palette.primary.main}
      />
    </svg>
  )
}

const Icon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <rect x='3.5' y='3.5' width='17' height='17' rx='0.5' stroke='black' />
    </svg>
  )
}

const IndeterminateIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <path d='M4.16675 9.1665V10.8332H15.8334V9.1665H4.16675Z' fill='white' />
    </svg>
  )
}

const Checkbox = () => {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <Icon />,
        checkedIcon: <CheckedIcon />,
        indeterminateIcon: <IndeterminateIcon />
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          '&.Mui-checked': {
            '& svg': {
              filter: `drop-shadow(0 2px 3px rgba(${
                theme.palette.mode === 'light' ? theme.palette.customColors.main : '12, 16, 27'
              }, 0.16))`
            },
            '&.Mui-disabled svg': {
              filter: 'none',
              '& path:first-of-type': {
                fill: theme.palette.action.disabled
              },
              '& path:last-of-type': {
                fill: theme.palette.background.paper,
                stroke: theme.palette.background.paper
              }
            }
          },
          '&.Mui-disabled:not(.Mui-checked) svg': {
            stroke: theme.palette.action.disabled
          },
          '&.Mui-checked.MuiCheckbox-colorSecondary svg path:first-of-type': {
            fill: theme.palette.secondary.main
          },
          '&.Mui-checked.MuiCheckbox-colorSuccess svg path:first-of-type': {
            fill: theme.palette.success.main
          },
          '&.Mui-checked.MuiCheckbox-colorError svg path:first-of-type': {
            fill: theme.palette.error.main
          },
          '&.Mui-checked.MuiCheckbox-colorWarning svg path:first-of-type': {
            fill: theme.palette.warning.main
          },
          '&.Mui-checked.MuiCheckbox-colorInfo svg path:first-of-type': {
            fill: theme.palette.info.main
          }
        })
      }
    }
  }
}

export default Checkbox
