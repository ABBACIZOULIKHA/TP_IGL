import React from 'react'
import CardAnnonce from '../SecondPage/CardAnnonce'
import '../CSS/AnnoncePage1.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AnnoncesScreen(){
  
   const [Annances,setAnnacses]=useState([])
   const {search,titre} = useParams() ;
   
   useEffect(()=> {
    if (search =="search"){
      fetchData('http://127.0.0.1:8000/annancefiltretitre/'+titre) ;
      console.log(titre,search);
    }else{
      if(search =="wilaya"){
        fetchData('http://127.0.0.1:8000/annancefiltrewilaya/'+titre) ;
      }else{
        if(search =="commune"){
          fetchData('http://127.0.0.1:8000/annancefiltrecommune/'+titre) ;
        }else{
          if(search =="type"){
            fetchData('http://127.0.0.1:8000/annancefiltretype/'+titre) ;
          }else {
            if(search =="periode"){
              fetchData('http://127.0.0.1:8000/annancefiltreperiode/'+titre) ;
            }else {
          fetchData('http://127.0.0.1:8000/annance/') ;}}
       }
}}}) ;

   function fetchData(baseurl){
   fetch(baseurl)
   .then(response => response.json())
   .then((data) => {
       setAnnacses(data.results) ;
      }) ;
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
