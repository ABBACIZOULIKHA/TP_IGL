import React from 'react'
import CardAnnonce from '../SecondPage/CardAnnonce'
import '../CSS/AnnoncePage1.css'
import { useState } from 'react'
import { useEffect } from 'react'

function AnnoncesScreen(){
  
   const [Annances,setAnnacses]=useState([])

   useEffect(()=> {
    fetchData('http://127.0.0.1:8000/annance/') ;
    
   }) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => setAnnacses(data)
   ) ;
  }
  return (
    <div className="AnnoncesC">
      { 
      Annances.map((annance) => <CardAnnonce annance={annance} />)
      }
      
    </div>
  )
}

export default AnnoncesScreen
