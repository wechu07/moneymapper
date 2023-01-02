// const router = require('express').Router()
// const User = require('../models/User')
// const CryptoJS = require('crypto-js')
// const jwt = require('jsonwebtoken')

// // @desc: User register
// // Route: POST/
// // http://localhost:5000/api/auth/register
// router.post("/register", async (req, res) => {
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         // encrypted password
//         password: CryptoJS.AES.encrypt(
//             req.body.password , 
//             process.env.PASSWORD_SECRET).toString()
//     })

//     try {
//         const savedUser = await newUser.save()
//         res.status(201).json(savedUser)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }) 

// // @desc: User login
// // Route: POST/
// // http://localhost:5000/api/auth/login
// router.post("/login", async (req, res) => {
//     // find user within db
//     try {
//         const user = await User.findOne({ username: req.body.username })
//         // error if username is not found
//         !user && res.status(401).json("Wrong username")

//         // decrypting the password
//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password, 
//             process.env.PASSWORD_SECRET
//         )

//         // should never be revealed in the db
//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

//         // error if password is incorrect
//         originalPassword !== req.body.password && res.status(401).json("Wrong password")


//         // jwt access token
//         const accessToken = jwt.sign({
//             id: user._id,
//             isAdmin: user.isAdmin
//         }, process.env.JWT_SECRET,
//         { expiresIn: "3d"}
//         )

//         // we can destructure the password, and not send it
//         const { password, ...others } = user._doc
        
//         // if successful    
//         res.status(200).json({...others, accessToken })
//     } catch (err) {
//         // error status send instead
//         res.status(500).json(err)
//     }
// })

// module.exports = router