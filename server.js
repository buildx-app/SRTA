const express = require('express')
const next = require('next')
const cors = require('cors')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = next({ dev: true })

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spra',
  password: '12345',
  port: 5432 // Change to your PostgreSQL port if necessary
})

app.prepare().then(() => {
  const server = express()

  // Enable CORS
  server.use(cors())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  //   create user

  server.post('/register', async (req, res) => {
    const { name, email, username, phone, password, role } = req.body
    if (!name || !email || !password || !username || !phone || !userRoles.includes(role.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid input data' })
    }

    try {
      // Check if the user with the same email already exists
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email])

      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User with this email already exists' })
      }

      // Get the role_id based on the role name from the "roles" table
      const roleQuery = await pool.query('SELECT role_id FROM roles WHERE role_name = $1', [role])

      if (roleQuery.rows.length === 0) {
        return res.status(400).json({ message: 'Invalid role' })
      }

      const roleId = roleQuery.rows[0].role_id
      console.log(roleId, 'roleId')
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10)

      // Insert the user data into the "users" table
      await pool.query(
        'INSERT INTO users (role_id, name, email, username, phone, password   ) VALUES ($1, $2, $3, $4, $5, $6)',
        [roleId, name, email, username, phone, hashedPassword]
      )
      return res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
      console.error('Error registering user:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })
  server.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
      // Find the user by email in the "users" table
      const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email])

      if (userQuery.rows.length === 0) {
        return res.status(401).json({ message: 'User not found' })
      }

      const user = userQuery.rows[0]

      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Incorrect password' })
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, role: user.role_id },
        'unique', // Replace with your secret key
        { expiresIn: '1h' }
      )

      return res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
      console.error('Error logging in:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('Server is running on http://localhost:3000')
  })
})
