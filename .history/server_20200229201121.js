const express = require('express');
const app = express();
const connectDB = 

//send file
app.get("/", (req, res) => res.json({msg: "Welcome to Contact keeper API"}))
// app.get("/", (req, res) => res.send('Hello World'))


//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require('./routes/contacts.js'));
app.use("/api/auth", require("./routes/auth"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server on ${PORT}`))

