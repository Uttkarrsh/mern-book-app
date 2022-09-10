import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book';
import './Book.css'

function Books() {

  const [bookdata,setBookdata]=useState()

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get("https://book-app-utt.herokuapp.com/books");
      setBookdata(res.data.books);
      return res;
    }
    fetchData();
  }, []);

     console.log(bookdata);
    

  return (
    <>
    <ul>
      {
        bookdata && bookdata.map((books,i)=>(
          <li className='book' key={i}>
            <Book book={books}/>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default Books