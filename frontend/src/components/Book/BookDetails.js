import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../AddBook.css'

function BookDetails() {

    const history=useNavigate();

    const [inputs,setInputs]=useState({})

    const id=useParams().id;
    console.log(id)
    useEffect(()=>{
        const fetchHandler= async ()=>{
        await axios.get(`http://localhost:5000/books/${id}`)
        .then(res=>res.data).then((data)=>setInputs(data.book))
            
        }
        fetchHandler();
    

    },[id]);

    const sendRequest=async ()=>{
        await axios.put(`https://book-app-utt.herokuapp.com/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            price:Number(inputs.price),
            description:String(inputs.description),
            image:String(inputs.image),
            link:String(inputs.link)
        })
    }

    const submit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
    }

    const handleChange =(e)=>{
        setInputs((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
          }))
    }

    console.log(inputs)

  return (
    <>
    
    <h1 className='add'>Enter The Details Of the BOOK</h1>
     <div className="container">
      
      <div className="input" >
        <h4>Name</h4>
        <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
      </div>
      <div className="input">
        <h4>Author</h4>
        <input type="text" name="author" value={inputs.author} onChange={handleChange}/>
      </div>
      <div className="input">
        <h4>Price</h4>
        <input type="number" name="price" value={inputs.price} onChange={handleChange}/>
      </div>
      <div className="input">
        <h4>Desription</h4>
        <input type="text" name="description" value={inputs.description} onChange={handleChange}/>
      </div>
      <div className="input">
        <h4>Image URL</h4>
        <input type="text" name="image" value={inputs.image} onChange={handleChange}/>
      </div>
      <button className='add-button' onClick={submit}>UPDATE</button>
    </div>
    

    </>
  )
}

export default BookDetails