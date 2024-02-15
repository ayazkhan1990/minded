const express = require("express");
const router = require("./router")
const app = express();
const Port =4000;

// app.use(cookieparser());  // add cookie parser package
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs")
app.use("/assets", express.static("assets"))
app.use("", router)


app.listen(Port, ()=>{
    console.log("Server 4000");
})