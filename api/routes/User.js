const express = require('express');
const UserController = require('../controller/User')
const route = express.Router();

route.get('/all', UserController.getAllUser);

route.post('/newuser', UserController.createNewUser);

route.get('/byid/:email', UserController.getUserByEmail);

route.put('/update', UserController.updateUser);

route.delete('/delete/:email', UserController.deleteUser)

module.exports = route;