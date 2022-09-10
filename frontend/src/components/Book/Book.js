import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Book.css'

function Book(props) {

    const history=useNavigate();

    const {_id, name ,author, image, price, description,link} = props.book;
    
    const Delete= async()=>{
      await axios.delete(`https://book-app-utt.herokuapp.com/books/${_id}`)
      .then((res)=>res.data)
      .then(()=>history("/"))
      .then(()=>history('/books'));
      
    }

  return (
    <>
    <div className="card">
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h3> By {author}</h3>
    <h4> Rs {price}</h4>
    <p>{description}</p>
    {/* <p>{link}</p> */}
    <div className="buttons">
    <button className='button'> <Link to={`/books/${_id}`}>  UPDATE  </Link> </button>
    <button className='button' onClick={Delete}>DELETE</button>
    </div>
    </div>
    </>
  )
}

export default Book