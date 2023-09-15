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
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <g clip-path='url(#clip0_574_967)'>
        <path
          d='M16.9999 0.000149646H3.00009C2.20446 0.000149646 0.5 -1.34136e-06 0 9.004e-09C-1.27218e-06 0.499994 0.000143409 2.20446 0.000143409 3.0001V16.9999C0.000143409 17.7955 -1.21666e-06 19 5.66244e-07 20C0.499993 20 2.20446 19.9998 3.00009 19.9998H16.9999C17.7955 19.9998 19 20 20 20C20 19 19.9998 17.7955 19.9998 16.9999V3.0001C19.9998 2.20446 20 0.499999 20 6.77413e-06C19.5 0 17.7955 0.000149646 16.9999 0.000149646ZM14.9999 11H5.00006L5 10.5C5 10.5 5 10.2652 5 10C5 9.73479 5 9.5 5 9.5C5 9 5.00006 9 5.00006 9H14.9999L15 9.5C15 9.5 15 9.73479 15 10C15 10.2652 14.9999 11 14.9999 11Z'
          fill={theme.palette.primary.main}
        />
      </g>
      <defs>
        <clipPath id='clip0_574_967'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
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
