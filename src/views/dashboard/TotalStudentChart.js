import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Card, CardHeader, CardContent, IconButton, Typography, Box } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import { MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [205, 170]

export default function TotalStudentChart() {
  const theme = useTheme()

  const legendFormatter = val => {
    return (
      <>
        {/* <Box sx={{ background: 'red' }}></Box> */}
        <Typography>{val}</Typography>cdc
      </>
    )
  }

  const options = {
    colors: [
      //   theme.palette.success.main,
      hexToRGBA(theme.palette.primary.main, 0.7),
      hexToRGBA(theme.palette.customColors.secondary, 0.7)
    ],
    stroke: { width: 0 },
    legend: {
      position: 'bottom',
      //   formatter: legendFormatter,
      formatter: val => `${val}`,
      fontSize: '18px',
      //   horizontalAlign: 'center',
      markers: { offsetX: -3 },
      labels: { colors: theme.palette.text.secondary },
      itemMargin: {
        vertical: 3,
        horizontal: 70
      },
      onItemHover: {
        highlightDataSeries: false
      }
    },
    tooltip: { enabled: false },
    // dataLabels: { enabled: false },
    dataLabels: {
      enabled: false,
      formatter: val => `${parseInt(val, 10)}%`
    },
    labels: ['Boys', 'Girls'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            // formatter: labetFormatter,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontWeight: 700,
              formatter: val => `${val}`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h2.fontSize
            },
            total: {
              show: true,
              label: '',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h5.fontSize
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 249 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { height: 199 }
        }
      }
    ]
  }

  return (
    <>
      <Card variant='outlined'>
        <CardHeader
          action={
            <CustomTextField
              select
              defaultValue={9}
              disabled
              size='small'
              id='custom-select'
              variant='filled'
              popupIcon={<KeyboardArrowDownIcon />}
              SelectProps={{
                variant: 'filled',
                forcePopupIcon: true,
                popupIcon: <KeyboardArrowDownIcon />
              }}
              sx={{
                '& .MuiInputBase-input:not(textarea)': {
                  p: '6px 10px !important',
                  fontSize: '16px'
                }
              }}
            >
              <MenuItem value={9}>Class 9</MenuItem>
              <MenuItem value={10}>Class 10</MenuItem>
              <MenuItem value={12}>Class 12</MenuItem>
            </CustomTextField>
          }
          title={<Typography sx={{ fontSize: 20, fontWeight: 700 }}>Total Students</Typography>}
        />
        <CardContent>
          <ReactApexcharts type='donut' height={313} series={series} options={options} />
        </CardContent>
      </Card>
    </>
  )
}
