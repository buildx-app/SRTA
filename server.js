const express = require('express')
const next = require('next')
const cors = require('cors')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const dev = true
const app = next({ dev })

const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'spra',
  // password: '12345',
  // port: 5432 // Change to your PostgreSQL port if necessary

  user: process.env.POSTGRES_USER || 'maulikd',
  host: process.env.POSTGRES_HOST || 'ep-aged-darkness-00061604.us-east-2.aws.neon.tech',
  database: process.env.POSTGRES_DATABASE || 'SRTA',
  password: process.env.POSTGRES_PASSWORD || 'c0J7mahetQHw',
  port: process.env.POSTGRES_PORT || 5432,
  ssl: true
})

app.prepare().then(() => {
  const server = express()

  // Enable CORS
  server.use(
    cors({
      origin: 'https://srta-gamma.vercel.app/', // Replace with your Vercel app URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true // If your API supports credentials (cookies, authorization)
    })
  )
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  const userRoles = ['admin', 'evaluator', 'assistant', 'manager', 'investigator']
  //   create user

  server.post('/api/register', async (req, res) => {
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
      // Add response headers
      res.setHeader('Access-Control-Allow-Origin', '*') // Replace '*' with your allowed origins
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      return res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
      console.error('Error registering user:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })
  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body

    try {
      // Find the user by email in the "users" table
      const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email])

      if (userQuery.rows.length === 0) {
        return res.status(401).json({ message: req.body })
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

      // Get the role name based on the role_id from the "roles" table
      const roleQuery = await pool.query('SELECT role_name FROM roles WHERE role_id = $1', [user?.role_id])
      const userRole = roleQuery.rows[0].role_name

      // Add response headers
      res.setHeader('Access-Control-Allow-Origin', '*') // Replace '*' with your allowed origins
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

      return res.status(200).json({
        message: 'Login successful',
        accessToken: token,
        userData: {
          username: user?.username || '',
          email: user?.email,
          role: userRole
        }
      })
    } catch (error) {
      console.error('Error logging in:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })
  server.get('/api/get-users', async (req, res) => {
    try {
      const userQuery = await pool.query(
        'SELECT u.id, u.name, u.username, u.email, u.phone, r.role_name FROM users u INNER JOIN roles r ON u.role_id = r.role_id'
      )
      // Get the role name based on the role_id from the "roles" table
      const users = userQuery.rows
      // Add response headers
      res.setHeader('Access-Control-Allow-Origin', '*') // Replace '*' with your allowed origins
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      return res.status(200).json({
        users: users
      })
    } catch (error) {
      console.error('Error logging in:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })
  server.get('/api/test', async (req, res) => {
    try {
      // Simulate some server logic
      // You can replace this with your actual logic
      const responseData = { message: 'hello from server' }
      // Add response headers
      res.setHeader('Access-Control-Allow-Origin', '*') // Replace '*' with your allowed origins
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

      return res.status(200).json(responseData)
    } catch (error) {
      console.error('Error:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  })

  server.listen(3001, err => {
    if (err) throw err
    console.log('Server is running on http://localhost:3001')
  })
})
