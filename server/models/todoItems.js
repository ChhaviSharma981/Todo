const mongoose = require('mongoose');

const ToDoItemSchema = new mongoose.Schema({
    // Define your schema fields here
   item:{ 
    type: String,
    required: true
    // Other fields...
   }
  });
  
  // Register the model with the schema
  const ToDoItem = mongoose.model('ToDoItem', ToDoItemSchema);
  
  module.exports = ToDoItem;