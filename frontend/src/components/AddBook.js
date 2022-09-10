import React, { useState } from 'react'
import './AddBook.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddBook() {

  const history=useNavigate();

  const [inputs,setInputs]=useState({
    name:"",
    author:"",
    price:"",
    description:"",
    image:""
  })
  
  const sendRequest= async ()=>{
    await axios.post("https://book-app-utt.herokuapp.com/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      price:Number(inputs.price),
      description:String(inputs.description),
      image:String(inputs.image),
      // link:String(inputs.link)
    }).then(res=>res.data)
  }

  const submit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/books'))
  }

  const handleChange=(e)=>{
    setInputs((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }
  //  console.log(inputs);
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
      {/* <div className="input">
        <h4>Book Link</h4>
        <input type="text" name="image" value={inputs.link} onChange={handleChange}/>
      </div> */}
      <button className='add-button' onClick={submit}>SUBMIT</button>
    </div>
    
    
    </>
  )
}

export default AddBook