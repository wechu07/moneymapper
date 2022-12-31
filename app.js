const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/db')

// connect the db
connectDB()

const app = express()

// HTTP request logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// loading the config files
dotenv.config({ path: './config/config.env' })

const port = process.env.PORT || 3000

// server running in either
// production or development mode
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`)
})