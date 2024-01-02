const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5400;

app.use(cors());

const ToDoItemRoute = require('./routes/todoItems');
const mongoURI = 'mongodb+srv://chhavi47:chha42@mern-app.0yhcpvc.mongodb.net/?retryWrites=true&w=majority';

// Establish MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Mongoose Connected');
  // Start your server or perform other actions upon successful connection
})
.catch((err) => {
  console.error('Not connected:', err);
});

app.use('/', ToDoItemRoute);
app.listen(PORT, ()=> console.log("Server connected"));