const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
app.use(cors())
app.use(express.json())

app.listen(3001, () =>{
console.log("Server Running")
})