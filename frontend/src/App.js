import React from 'react'
import './App.css'
import Header from './components/Header'
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom"
import Home from './components/Home'
import AboutUS from './components/AboutUs'
import AddBook from './components/AddBook'
import Books from './components/Book/Books'
import BookDetails from './components/Book/BookDetails'
import Search from './components/Search'

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>

    <Header />

    <main>
       <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutUS />}/>
            <Route path='/books' element={<Books />}/>
            <Route path='/add' element={<AddBook />}/>
            <Route path='/books/:id' element={<BookDetails />}/>
            {/* <Route path='/search' element={<Search />}/> */}
           

       </Routes>
    </main>


    </BrowserRouter>
    </React.Fragment>
    
  )
}

export default App