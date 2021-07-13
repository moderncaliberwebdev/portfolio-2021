// Imports
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import expresshttp from 'express-http-to-https'
import nakedredirect from 'express-naked-redirect'

// // DB
// import connectDB from './config/db.js'

// Routes
import routes from './routes/router.js'

// server setup
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
dotenv.config()
// connectDB()

//URL Settings - redirect non-www to www and http to https
app.use(nakedredirect())

const redirectToHTTPS = expresshttp.redirectToHTTPS
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))

app.use('/api', routes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/dist')))

  app.get('/sitemap', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'sitemap.xml'))
  })

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  )
}

app.listen(PORT, () => console.log('Server is running on port ', PORT))
