import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import { Theme } from '@fullcalendar/core/internal'
import TableBasic from '../table/data-grid/TableBasic'

const columns = [
  {
    flex: 0.25,
    minWidth: 150,
    field: 'name',
    headerName: 'Name'
  },
  {
    flex: 0.25,
    minWidth: 150,
    field: 'username',
    headerName: 'User Name'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'Email'
  },
  {
    flex: 0.25,
    minWidth: 120,
    field: 'phonenumber',
    headerName: 'Phone Number'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'role',
    headerName: 'Role(s)'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: () => <ActionOptions />
  }
]
const ActionOptions = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IconButton variant='outlined' sx={{ fontSize: '21px', color: '#000' }}>
      <Icon icon='tabler:eye' />
    </IconButton>
    <IconButton variant='outlined' sx={{ fontSize: '21px', color: '#000' }}>
      <Icon icon='tabler:trash' />
    </IconButton>
    <OptionsMenu
      iconButtonProps={{ size: 'small', sx: { fontSize: '21px', color: '#000' } }}
      menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
      options={[
        {
          text: 'Download',
          icon: <Icon icon='tabler:download' fontSize={20} />
        },
        {
          text: 'Edit',
          // href: `/apps/invoice/edit/${row.id}`,
          icon: <Icon icon='tabler:edit' fontSize={20} />
        },
        {
          text: 'Duplicate',
          icon: <Icon icon='tabler:copy' fontSize={20} />
        }
      ]}
    ></OptionsMenu>
  </Box>
)
const rows = [
  {
    id: 1,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner/Admin',
    action: ''
  },
  {
    id: 2,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner',
    action: ''
  },
  {
    id: 3,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Admin',
    action: ''
  },
  {
    id: 4,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner/User',
    action: ''
  },
  {
    id: 5,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner',
    action: ''
  },
  {
    id: 6,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner/Admin',
    action: ''
  },
  {
    id: 7,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Admin',
    action: ''
  },
  {
    id: 8,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'Examiner/User',
    action: ''
  },
  {
    id: 9,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'User',
    action: ''
  },
  {
    id: 10,
    name: 'dfgsdf',
    username: 'sdfsdf ',
    email: 'xyx@gmail.com',
    phonenumber: '+91 1234567890',
    role: 'User',
    action: ''
  }
]

const UserTable = () => {
  return (
    <Box sx={{ height: 550 }}>
      <TableBasic columns={columns} rows={rows} hideFooter />
    </Box>
  )
}

export default UserTable
