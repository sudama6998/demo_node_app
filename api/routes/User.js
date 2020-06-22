const express = require('express');
const auth = require('../../middlewares/auth')
const UserController = require('../controller/User')
const route = express.Router();

route.get('/all', auth, UserController.getAllUser);

route.post('/newuser', UserController.createNewUser);

route.get('/byid/:email', UserController.getUserByEmail);

route.put('/update', UserController.updateUser);

route.post('/login', UserController.loginUser);

route.delete('/delete/:email', UserController.deleteUser)

module.exports = route;