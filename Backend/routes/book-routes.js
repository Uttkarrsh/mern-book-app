const express=require('express');
const Book = require('../models/Book');
const router=express.Router()


router.get('/', async(req,res)=>{
    let books;
    try{
        books =await Book.find()
    }catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"No book Found"})
    }
    return res.status(200).json({books})
});


router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    let book;
    try{
        book = await Book.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({book})
});


router.post('/',async(req,res)=>{
    let book;
    const {name,author,price,description,image,link}=req.body;
    try{
        book = new Book({
            name,
            author,
            price,
            description,
            image,
            link
        })

        await book.save()
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(200).json({book})
});


router.put('/:id', async(req,res)=>{
    const id=req.params.id;
    const {name,author,price,description,image,link}=req.body;
    let book;
    try{
        book =await Book.findByIdAndUpdate(id,{
            name,
            author,
            price,
            description,
            image,
            link
        });
        book=await book.save()
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({book})
})

router.delete('/:id', async(req,res)=>{
    const id=req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Unable to find and delete"})
    }
    return res.status(200).json({book})
})


module.exports=router;