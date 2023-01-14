import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import annonceimg from '../../Images/AnnonceVendre.jpg'

import '../CSS/FirstSection2.css'

const FirstSection2 = () => {
   const [annanceData ,setAnnacseData]=useState([]) ;
   const [photoData ,setPhotoData]=useState([]) ;
   const {annance_id} = useParams() ;
   
   useEffect(()=> {
    fetchData1('http://127.0.0.1:8000/annance/'+annance_id) ;
    fetchData2('http://127.0.0.1:8000/annancephoto/'+annance_id) ;
   }) ;

   function fetchData1(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
     setAnnacseData(data) ;
      }) ;
  }
  function fetchData2(baseurl){
    fetch(baseurl)
    .then(response => response.json())
    .then((data) => {
      setPhotoData(data.results) ;
       }) ;
       
   }
  
  return (
    <section className="">
 
      <div className="ImageContact">
        <div className="ImagesName">
          <div className="TitreInfo">
            <h1>{annanceData.titre}</h1>
            <div>
              <p> localisation : {annanceData.wilaya},{annanceData.commune} ,{annanceData.adresse}</p>
              <p>Prix : {annanceData.prix}DA</p>
            </div>
          </div>
          {
            photoData.map((photo)=>
            <div className="ImagesAnnonce">
            <i class="fa-solid fa-arrow-left"></i>
               <img src={photo.image} />
              <i class="fa-solid fa-arrow-right"></i>
              </div>
            )
          }    
      
          <p> categorie :{annanceData.categorie} , type :{annanceData.type}</p>
        </div>
        <div className="ContactUser">
          {/* <h3>{annanceData.idAnnanceur}  </h3> */}
          <div className="InputTextUser">
            <textarea
              placeholder="Enter your message"
              rows="30"
              cols="70"
              required
              maxlength="500"
            ></textarea>
          </div>
          <div className="ButtonUser">
            <div className="report">
              <p>Report</p>
              <i class="fa-light fa-exclamation"></i>
            </div>
            <button className="button">send</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection2
