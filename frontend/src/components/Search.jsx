import React, { useState,useEffect } from 'react'
import axios from 'axios'


function Search() {

  const [search,setSearch]=useState()

  const [bookdata,setBookdata]=useState()

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get(`https://book-app-utt.herokuapp.com/search/${search}`);
      setBookdata(res.data.books);
      return res;
    }
    fetchData();
  }, [search]);

  console.log(bookdata);
  return (
   <>
   <div className="inputs">
     <input type="text" placeholder='Name of the book' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
   </div>
   </>
  )
}

export default Search