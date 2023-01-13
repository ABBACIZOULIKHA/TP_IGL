import React from 'react'
import '../CSS/FirstSection2.css'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
const SeondSection2 = () => {
  const [annanceData ,setAnnacseData]=useState([]) ;
   const {annance_id} = useParams() ;
   
   useEffect(()=> {
    fetchData('http://127.0.0.1:8000/annance/'+annance_id) ;
    
   }) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
     setAnnacseData(data) ;
      }) ;
  }
  return (
    <section className="SecondSection2">
      <h1> Description </h1>
      <p>{annanceData.description}</p>
    </section>
  )
}

export default SeondSection2
