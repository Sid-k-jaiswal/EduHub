const express = require('express')
const app = express()
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
    console.log("Running!")
});
app.get("/about",function(req,res){
    res.sendFile('public/about.html', {root: __dirname })    
})
app.get("/contact",function(req,res){
    res.sendFile('public/contact.html', {root: __dirname })    
})
app.get("/business",function(req,res){
    res.sendFile('public/business.html', {root: __dirname })    
})
app.get("/engineering",function(req,res){
    res.sendFile('public/engineering.html', {root: __dirname })    
})
app.get("/medical",function(req,res){
    res.sendFile('public/medical.html', {root: __dirname })    
})
app.get("/law",function(req,res){
    res.sendFile('public/law.html', {root: __dirname })    
})
app.get("/register",function(req,res){
    res.sendFile('public/register.html', {root: __dirname })    
})

app.post("/message",function(req,res){
    res.sendFile('public/message.html', {root: __dirname })    
})
app.post("/message2",function(req,res){
    res.sendFile('public/message2.html', {root: __dirname })    
})
app.listen(3000,function(){

});
