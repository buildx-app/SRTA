import { DataGrid } from '@mui/x-data-grid'

const TableBasic = props => {
  const { columns, rows } = props

  return (
    <DataGrid disableColumnMenu rowHeight={68} columnHeaderHeight={65} columns={columns} rows={rows.slice(0, 10)} />
  )
}

export default TableBasic
