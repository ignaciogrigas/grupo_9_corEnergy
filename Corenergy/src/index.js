const express = require("express");
const app = express();
const path = require("path");
const methodOverried = require ("method-override");
const session = require ("express-session");
const cookie = require ("cookie-parser")

app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),()=>console.log("Server on http://localhost:" + app.get("port")))

//app settings
app.set("view engine", "ejs")
app.set("views",path.resolve(__dirname, "./views"))

//public acces
app.use(express.static(path.resolve(__dirname, "../public")))

app.use(methodOverried("_method"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({secret:"Corenergy",resave:true,saveUninitialized:true}));
app.use(cookie());

//rutas
app.use(require("./routes/home"));
app.use("/products",require("./routes/products"));
app.use("/users",require("./routes/users"));

