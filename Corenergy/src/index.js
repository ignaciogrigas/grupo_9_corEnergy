const express = require("express");
const app = express();
const path = require("path");
const methodOverried = require ("method-override");
const session = require ("express-session");
const cookie = require ("cookie-parser")
const cors = require ("cors")

app.set("port",process.env.PORT || 3001)
app.listen(app.get("port"),()=>console.log("Server on http://localhost:" + app.get("port")))

//app settings
app.set("view engine", "ejs")
app.set("views",path.resolve(__dirname, "./views"))

//public access
app.use(express.static(path.resolve(__dirname, "../public")))

//app middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverried("_method"));
app.use(cookie());
app.use(session({secret:"Corenergy",resave:false,saveUninitialized:true}));
app.use(require("./middlewares/shareUser"));
app.use(cors())

//rutas
app.use(require("./routes/home"));
app.use("/products",require("./routes/products"));
app.use("/users",require("./routes/users"));
app.use("/api",require("./routes/api"));

