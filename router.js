const express = require("express");
const Router = express.Router();
const user = require("./database");
// const bcrypt = require("bcryptjs");
// const cookieparser =require("cookie-parser");
// const auth =require("./authorization");

//this is home page route
Router.get("/", (req, res) => {
  res.render("index");
});

// About Us
Router.get("/about", (req, res)=>{
  res.render("about")
});
// Services
Router.get("/services", (req, res)=>{
  res.render("services")
});
// Services Details
Router.get("/service-details", (req, res)=>{
  res.render("service-details")
});
// Project
Router.get("/project", (req, res)=>{
  res.render("project")
});
// Project Details
Router.get("/project-details", (req, res)=>{
  res.render("project-details")
});
// Privacy Policy
Router.get("/privacy-policy", (req, res)=>{
  res.render("privacy-policy")
});
// Contact
Router.get("/contact", (req, res)=>{
  res.render("contact");
});

Router.post("/register", async (req, res)=>{
 try {
  
  const senddata= new user(req.body);
  const savedata = await senddata.save();
  res.render("contact");

 } catch (error) {
  res.status(400).send(error)
 }
});


module.exports=Router;