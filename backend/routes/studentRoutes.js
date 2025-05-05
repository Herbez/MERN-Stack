const express = require('express');
const { getUsers, addUser, deleteUser, getUser, updateUser } = require('../controller/StudentController');

const route = express.Router();

route.get("/getUsers", getUsers);
route.get("/getUser/:id", getUser);
route.post("/addUser", addUser);
route.delete("/deleteUser/:id", deleteUser);
route.put('/updateUser/:id', updateUser)


module.exports = route;
