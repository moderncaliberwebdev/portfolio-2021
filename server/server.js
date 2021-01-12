// Imports
import express from 'express'
import dotenv from 'dotenv'

// DB
import connectDB from './config/db.js'

// Routes
import routes from './routes/router.js'

// server setup
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
dotenv.config()
connectDB()

app.use('/api', routes)

app.listen(PORT, () => console.log('Server is running on port ', PORT))
