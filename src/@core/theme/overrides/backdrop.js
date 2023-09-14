// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Backdrop = () => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.primary.main}, 0.7)`
              : hexToRGBA(theme.palette.primary.main, 0.7)
        }),
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  }
}

export default Backdrop
