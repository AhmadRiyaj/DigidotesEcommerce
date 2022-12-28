const express = require('express')
const app = express.Router();
const { isLoggedIn, CheckduplicateEmailAndContact_no } = require('../middleware/auth')
const { SignUp, login, signup_page, dashboard, logout, get_allusers } = require('../controller/users')

app.get('/signup_page', signup_page);
app.get('/dashboard', [isLoggedIn], dashboard);
app.post('/SignUp', [CheckduplicateEmailAndContact_no], SignUp);
app.post('/login', login);
app.get('/logout', logout)

app.get('/get_allusers', get_allusers)



module.exports = { UsersRoute: app }