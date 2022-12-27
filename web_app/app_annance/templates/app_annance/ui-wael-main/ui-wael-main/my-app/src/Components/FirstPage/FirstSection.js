import React from 'react'
import '../CSS/Header.css'
import '../CSS/FirstSection.css'
import nextPage from './nextPage'
import {BrowserRouter as Router,Link ,Route , Routes }from "react-router-dom"
const FirstSection = () => {
  return (
    <Router >
    <section className='firstsection'>
        <div>
            <h1>Here you Can find any <span>Annonce </span> You searching for</h1>
           <Link to="/next"><button className='buttonconfig'  >
                Join Us
            </button></Link> 
        </div>
        <Routes>
          <Route path="/next" element={<nextPage/>} >
          </Route>
        </Routes>
    </section>

    </Router>
  )
}

export default FirstSection