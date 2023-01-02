const router = require('express')
const User = require('../models/User')

router.post('/users', async (req,res) => {
    try {
        const newUser = await User.create(req.body)
    res.send('A new user has been created and inserted succesfully')
    } catch (err) {
        res.status(500).json(err)
    }
})