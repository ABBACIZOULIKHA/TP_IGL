import React from 'react'
import '../CSS/AnnoncePage1.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardAnnonce2 from '../SecondPage/CardAnnonce2'

function AnnoncesScreen2(){
  
   const [Annances,setAnnacses]=useState([])
   
   
   useEffect(()=> {
    fetchData('http://127.0.0.1:8000/annance_annanceur/'+localStorage.getItem("email")) ;
    
   }) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
       setAnnacses(data.results) ;
      }) ;
  }
  return (
     
    <div className="AddAnnoncediv">
        <div className="Text">
          <h1>list of ads posted</h1>
          <hr />
        </div>
    <div className="AnnoncesC">
      
      { 
      Annances.map((annance) =>< CardAnnonce2 annance={annance} />)
      }
    </div>
    </div>
  )
} 

export default AnnoncesScreen2
