import React from 'react'
import '../CSS/FindMoreSection.css'
import imgannonce from '../../Images/AnnonceVendre.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const CardAnnonce = (props) => {

  const [Photos,setPhotos]=useState([])
  

   useEffect(()=> {
    fetchData('http://127.0.0.1:8000/annancephoto/'+props.annance.id) ;
    
   }) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
       setPhotos(data.results) ;
      }) ;
  }
  return (
    Photos.map((photo)=>
    <Link to ={'/contactuser/'+props.annance.id}>     
    <div className="CardAnnonce">
      <h2>{props.annance.titre}</h2>
      <img src={photo.url} alt="" />
      <div className="localisation_price_card">
        <div>{props.annance.commune}</div>
        <div>{props.annance.prix} DA</div>
      </div>

      <div className="etat_date_card">
        <p>{props.annance.date}</p>
        <div>
          <p>Details</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div></Link>
    )
  )
}

export default CardAnnonce
