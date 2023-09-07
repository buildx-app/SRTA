import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Components Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CustomInput from 'src/views/forms/form-elements/pickers/PickersCustomInput'

// const series = [{ data: [40, 20, 65, 50] }]

const series = [
  {
    name: 'Recieved',
    data: [0, 68, 45, 62, 50, 63, 25]
  },
  {
    name: 'Pending',
    data: [0, 45, 68, 58, 35, 12, 25]
  }
]

const EarningAreaChart = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    colors: [hexToRGBA(theme.palette.primary.main, 0.7), hexToRGBA(theme.palette.customColors.secondary, 0.7)],
    // colors: [theme.palette.primary.main, theme.palette.success.main],
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: 18,
      color: '#7D7D7D',
      offsetX: -30,
      offsetY: 0,
      markers: {
        width: 10,
        height: 10
      }
    },

    tooltip: { enabled: true },
    dataLabels: { enabled: false },
    stroke: {
      width: 1,
      curve: 'smooth'
    },
    grid: {
      show: true,
      borderColor: '#F3F3F3',
      strokeDashArray: 5,
      padding: {
        top: 70,
        bottom: 30,
        left: 40,
        right: 30
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette.primary.main
            },
            {
              opacity: 0,
              offset: 100,
              color: theme.palette.background.paper
            }
          ],
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette.success.main
            },
            {
              opacity: 0,
              offset: 100,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    // labels: {
    //   show: true
    // },
    xaxis: {
      labels: { show: true },
      categories: ['01', '05', '10', '15', '20', '25', '30'],
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },

      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      min: 0,
      max: 100,
      labels: {
        show: true,
        offsetX: 20,
        offsetY: 0,
        formatter: val => `${val}k`
      }
    }
  }

  const [month, setMonth] = useState(new Date())

  return (
    <DatePickerWrapper>
      <Card>
        <CardHeader
          title={<Typography sx={{ fontSize: 20, fontWeight: 700 }}>Total Students</Typography>}
          sx={{
            flexDirection: ['column', 'row'],
            alignItems: ['flex-start', 'center'],
            '& .MuiCardHeader-action': { mb: 0 },
            '& .MuiCardHeader-content': { mb: [2, 0] }
          }}
          action={
            <DatePicker
              selected={month}
              id='month-picker'
              showMonthYearPicker
              dateFormat='MMM,yyyy'
              popperPlacement={'bottom-end'}
              onChange={month => setMonth(month)}
              customInput={
                <CustomInput
                  color='secondary'
                  size='small'
                  width={100}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon fontSize='1.25rem' icon='tabler:chevron-down' />
                      </InputAdornment>
                    )
                  }}
                />
              }
            />
          }
        />
        <CardContent>
          <ReactApexcharts type='area' height={250} options={options} series={series} />
        </CardContent>
      </Card>
    </DatePickerWrapper>
  )
}

export default EarningAreaChart
