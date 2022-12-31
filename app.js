const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/db')

// connect the db
// connectDB()

const app = express()
const db = connectDB

// HTTP request logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// loading the config files
dotenv.config({ path: './config/config.env' })

app.get('/payments', (req, res) => {
    const start = '2022-01-01'
    const end = '2022-02-01'
  
    db.getPaymentsByPeriod(start, end, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.json(rows)
      }
    })
  })

const port = process.env.PORT || 3000

// server running in either
// production or development mode
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`)
})