const router = require('express').Router()
const connectDB = require('../config/db')


const db = connectDB()

router.get('/payments', (req, res) => {
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
