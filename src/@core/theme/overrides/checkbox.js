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
  const theme = useTheme()

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={theme.palette.primary.main}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.6 3.5H17.4C19.3882 3.5 21 5.11177 21 7.1V17.9C21 19.8882 19.3882 21.5 17.4 21.5H6.6C4.61177 21.5 3 19.8882 3 17.9V7.1C3 5.11177 4.61177 3.5 6.6 3.5ZM16.5 11.8569H7.5V13.1426H16.5V11.8569Z'
      />
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
          '&:hover': {
            backgroundColor: 'transparent !important'
          },
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
