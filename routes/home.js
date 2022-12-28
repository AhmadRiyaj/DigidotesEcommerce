const express = require('express')
const app = express.Router();
const { index, about, blog, contact, contact_us_form, faq, single_blog } = require('../controller/home')
app.get('/', index);
app.get('/about', about)
app.get('/blog', blog)
app.get('/contact', contact)
app.get('/faq', faq)
app.post('/contact_us_form', contact_us_form)
app.get('/single_blog', single_blog)


module.exports = { Homeroute: app }