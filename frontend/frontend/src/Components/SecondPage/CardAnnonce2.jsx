import React from 'react'
import '../CSS/FindMoreSection.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2' 
const baseUrl1 ='http://127.0.0.1:8000/annance/'
const baseUrl2 ='http://127.0.0.1:8000/PhotoFiltreTitreAnnance/'
const CardAnnonce2 = (props) => {
  const[annanceData,setAnnonceData]=useState([]) ;
  const [totalResult,settotalResult]=useState(0);
  const [Photos,setPhotos]=useState([])
  const [img,setImg]=useState([])
  

   useEffect(()=> {
    fetchData1('http://127.0.0.1:8000/annancephoto/'+props.annance.id) ;
    
   }) ;

   function fetchData1(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
       setPhotos(data.results) ;
      }) ;
      Photos.map((photo,i,j )=>
      {
        i=0 ; j=1
        if (i==0 && j==1) { setImg(photo.image) }
        else i=1
      })
  }

  const deleteData = (id) => {
   Swal.fire({
    title: 'Confirm' ,
    text: 'Are you sure you want to delete this annonce ?',
    icon: 'info' ,
    confirmButtonText: 'Continue' ,
    showCancelButton:true
   }).then((result)=>{
    if (result.isConfirmed){
     try{
      axios.delete(baseUrl1+id)
           .then((res)=>{
        Swal.fire('success','Dta has been deleted.') ;
        try{
          axios.get(baseUrl1+id) 
          .then((res)=>{
            settotalResult(res.data.length) ;
            setAnnonceData(res.data);
          });
        }catch(error) {
          console.log(error) ;
        }
      });
     }catch(error){
      Swal.fire('error','Data has not been deleted !!');
     }

    } else {
      Swal.fire('error','Data has not been deletd !!');
    }
   }) ;
  } 
  
  return (
          
    <div className="CardAnnonce">
   <button onClick={()=>deleteData(props.annance.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg></button>
      <h2>{props.annance.titre}</h2>
       <img src={img} alt="" />
      <div className="localisation_price_card">
        <div>{props.annance.wilaya}</div>
        <div>{props.annance.prix} DA</div>
      </div>
       
      <div className="etat_date_card">
        <p>{props.annance.date}</p>
      
        <div>
        <Link to ={'/contactuser/'+props.annance.id}>
          <p>Details</p>
          <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
    )
 
}

export default CardAnnonce2
