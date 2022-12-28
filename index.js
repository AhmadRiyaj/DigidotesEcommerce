const express = require("express");

const ejs = require("ejs");
const bodyParser = require("body-parser");
const { serverport } = require("./config/config.server")
var session = require("express-session");
var flash = require('connect-flash');
var cookieParser = require("cookie-parser");

const { sequelize } = require("./models")

const app = express();
const { Homeroute, Productroute, UsersRoute, CartRoute, WishlistRoute, AdminRoute, CategoryRoute, SubcategoryRoute } = require('./routes')

// body parser for reading req data
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(cookieParser());
app.use(
    session({
        secret: "chdsbckj5ds65c46f54e6f46r5f4re5",
        resave: false,
        saveUninitialized: true,
    })
);


app.use(flash());
app.set("view engine", "ejs");
app.use(express.static("views"))
app.use(express.static("views/Admin"))

app.use(express.static("uploads"))

app.use(Homeroute)
app.use(Productroute)
app.use(UsersRoute)
app.use(CartRoute)
app.use(WishlistRoute)
app.use(AdminRoute)
app.use(CategoryRoute)
app.use(SubcategoryRoute)

app.listen(process.env.PORT || 8000, function () {
    console.log("App is running on Port 3000");
    init()
});


async function init() {
    try {
        sequelize.sync({});
        await sequelize.authenticate();
    } catch (error) {
        console.log(error)
    }

}