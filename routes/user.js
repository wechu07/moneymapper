const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/users', async (req,res) => {
    try {
        const newUser = await User.create(req.body)
    res.send('A new user has been created and inserted succesfully')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

router.get('/users/:id', async (req, res) => {
    const userId = await User.findById(req.params.id)
    res.send(users)
})


router.put('/users/:id', async (req, res) => {
    const userId = await User.findById(req.params.id)
    
})

module.exports = router