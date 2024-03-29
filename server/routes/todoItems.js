const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');

router.post('/api/item', async(req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json('Items Added Successfully.');
    }catch(err){
        res.json(err);
    }
})

router.get('/api/items', async(req,res)=>{
    try{
const allTodoItems = await todoItemsModel.find({});
res.status(200).json(allTodoItems)
    }catch(err){
res.json(err);
    }
})

router.put('/api/item/:id', async (req,res)=>{
    try{
        // find the item by its id and update it 
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Updated Successfully")
    } catch(err){
        res.json(err);
    }
})

router.delete('/api/item/:id', async (req,res)=>{
    try{
        // find the item by its id and delete it 
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully")
    } catch(err){
        res.json(err);
    }
})

module.exports = router;