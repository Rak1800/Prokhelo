
const router=require('express').Router()
const { createUser, logInuser, users, updateUser } = require('../userController/userController')

router.post('/register',createUser)
router.post('/loginuser',logInuser)
router.get('/users',users)
router.put('/update/:userId',updateUser)

module.exports=router 