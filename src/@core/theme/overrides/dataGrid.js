const DataGrid = () => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: '1px solid #DDD',
          border: '1px solid #DDD',
          color: theme.palette.text.primary,
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
          }
        }),
        toolbarContainer: ({ theme }) => ({
          paddingRight: `${theme.spacing(6)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`
        }),
        columnHeaders: ({ theme }) => ({
          backgroundColor: theme.palette.customColors.tableHeaderBg
        }),
        columnHeader: ({ theme }) => ({
          '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(6)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(6)
          }
        }),
        columnHeaderCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        columnHeaderTitleContainer: {
          padding: 0
        },
        columnHeaderTitle: ({ theme }) => ({
          fontWeight: 500,
          letterSpacing: '1px',
          textTransform: 'capitalize',
          fontSize: '18px',
          fontWeight: 600
        }),
        columnSeparator: ({ theme }) => ({
          color: theme.palette.divider
        }),
        row: {
          '&:last-child': {
            '& .MuiDataGrid-cell': {
              borderBottom: 0
            }
          }
        },
        cell: ({ theme }) => ({
          // borderColor: theme.palette.divider,
          fontSize: '18px',
          borderColor: '#F3F3F3',
          // borderColor: theme.palette.divider,
          borderColor: '#F3F3F3',
          '&:not(.MuiDataGrid-cellCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            color: '#9F9F9F',
            '&:first-of-type': {
              paddingLeft: theme.spacing(6)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(6)
          },
          '&:focus, &:focus-within': {
            outline: 'none'
          }
        }),
        cellCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        editInputCell: ({ theme }) => ({
          padding: 0,
          color: theme.palette.text.primary,
          '& .MuiInputBase-input': {
            padding: 0
          }
        }),
        footerContainer: ({ theme }) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-toolbar': {
            paddingLeft: `${theme.spacing(4)} !important`,
            paddingRight: `${theme.spacing(4)} !important`
          },
          '& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel': {
            color: theme.palette.text.primary
          }
        }),
        selectedRowCount: ({ theme }) => ({
          margin: 0,
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        })
      }
    }
  }
}

export default DataGrid
