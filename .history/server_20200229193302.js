const express = require('express');
const app = express();

//send file
app.get("/", (req, res) => res.json({msg: "Welcome to Contact keeper API"}))
// app.get("/", (req, res) => res.send('Hello World'))


//Defin 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server on ${PORT}`))

