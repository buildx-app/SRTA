import { DataGrid } from '@mui/x-data-grid'

const TableBasic = props => {
  const { columns, rows, ...rest } = props

  return <DataGrid disableColumnMenu rowHeight={68} columnHeaderHeight={65} columns={columns} rows={rows} {...rest} />
}

export default TableBasic
