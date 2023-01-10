import React from 'react'
import CardAnnonce from '../SecondPage/CardAnnonce'
import '../CSS/AnnoncePage1.css'
import { useState } from 'react'
import { useEffect } from 'react'

function AnnoncesScreen(){
  // const annances =[
  //   {
  //     'titre': 'fjfjfj',
  //     'prix':'44747',
  //     'commune': 'CJCJC',
  //     'date': '12/1/2023'
  //   },
  //   {
  //     'titre': 'kffkfkf',
  //     'prix':'272',
  //     'commune':'FKJFKF' ,
  //     'date': '12/1/2023'
  //   }
  //]
   const [Annances,setAnnacses]=useState([])

   useEffect(()=> {
    fetchData('http://127.0.0.1:8000/annance/') ;
    
   }) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json)
   .then((data) => setAnnacses(data.response)

   ) ;
  }
  return (
    <div className="row mb-4 ">
      { 
      Annances.map((annance) => <CardAnnonce annance={annance} />)
      }
      
    </div>
  )
}

export default AnnoncesScreen
