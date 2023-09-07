import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
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
    flex: 0.15,
    minWidth: 230,
    field: 'email',
    headerName: 'Email'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'phone',
    headerName: 'Phone Number'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'role_name',
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
    <IconButton variant='outlined' sx={{ fontSize: '21px' }}>
      <Icon icon='tabler:eye' />
    </IconButton>
    <IconButton variant='outlined' sx={{ fontSize: '21px' }}>
      <Icon icon='tabler:trash' />
    </IconButton>
    <IconButton variant='outlined' sx={{ fontSize: '21px' }}>
      <Icon icon='tabler:eye' />
    </IconButton>
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
  const [loading, setLoading] = useState(false)
  const [user, setUsers] = useState([])
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/get-users`)
      .then(res => {
        console.log(res?.data)
        const user = res?.data['users']?.map(item => {
          return { ...item, action: '' }
        })
        console.log(user, 'final users')
        setUsers(user)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      })
    console.log(user, 'users')
  }, [])
  return (
    <Box sx={{ height: 550 }}>
      {loading ? (
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <CircularProgress disableShrink sx={{ mt: 6 }} />{' '}
        </Box>
      ) : (
        <DataGrid columns={columns} rows={user} />
      )}
    </Box>
  )
}

export default UserTable
