// const router = require('express').Router()
// const User = require('../models/user')

// // GET retrieve all user
// router.get('/', async (req, res) => {
//     try{
//         const users = await User.find()
//         res.json(users)
//     } catch(error) {
//         console.log(error)
//         res.json({'message': 'error retrieving users '})
//     }
// })

// // GET retrieve user by username 
// router.get('/username/:username', async (req, res) => {
//     const { username } = req.params
//     try {
//         const users = await User.find({ username: username })
//         res.json(users)
//     } catch (error) {
//         console.log(error)
//         res.json({'message': 'error retrieving user'})
//     }
// })

// // GET retrieve user by id
// router.get('/id/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const user = await User.findById(id)
//         res.json(user)
//     } catch (error) {
//         console.log(error)
//         res.json({ 'message': 'error retrieving user'})
//     }
// })


// // POST create user
// router.post('/', async (req, res) => {
//     try {
//         // const
//         const createdUser = await new User(req.body).save()
//         res.json(createdUser)
//     } catch (error) {
//         console.log(error)
//         res.json({'message': 'error creating user'})
//     }
// })

// module.exports = router

// for later

const router = require('express').Router()
const User = require('../models/user')

// GET retreive all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json({ 'message': 'error retrieving users' })
    }
})

// GET retrieve users by username
router.get('/username/:username', async (req, res) => {
    const { username } = req.params
    try {
        const users = await User.find({ username })
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json({ 'message': 'error retrieving users' })
    }
})

// GET retrieve user by id
router.get('/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json({ 'message': 'error retrieving user' })
    }
})

// GET delete user by id
router.delete('/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user)  {
            res.status(404).json({ 'message': 'user doesn\'t exist' })
        } else {
            res.json({ 'message': 'user deleted' })
        }
    } catch (error) {
        console.log(error)
        res.json({ 'message': 'error deleting user' })
    }
})

// POST create user
router.post('/', async (req, res) => {
    try {
        const createdUser = await new User(req.body).save()
        res.json(createdUser)
    } catch (error) {
        console.log(error)
        res.json({ 'message': 'error creating user' })
    }
})

module.exports = router