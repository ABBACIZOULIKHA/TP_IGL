import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import annonceimg from '../../Images/AnnonceVendre.jpg'
import '../CSS/FirstSection2.css'

const FirstSection2 = () => {
   const [succes,setsucces]=useState([]) ;
   const [annanceData ,setAnnacseData]=useState([]) ;
   const [photoData ,setPhotoData]=useState([]) ;
   const [userData ,setuserData]=useState([]) ;
   const {annance_id} = useParams() ;
   const [mesgData,setmesgData]=useState({
    contenu:'',
     userSource:'',
     userDestination:'',
     date:'',
     status:'',
     titreAnnance:'' ,
   }) ;
   
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
  
   const handleChange=(event)=>{
    setmesgData({
      ...mesgData,
      [event.target.name]:event.target.value
    })
  }
  
  const formSubmit =()=>{
    var today = new Date();
    setsucces("sent successfully");
    const _formData=new FormData();
     _formData.append('userSource',localStorage.getItem("email"));
     _formData.append('userDestination',annanceData.EmailAnnanceur)
     _formData.append('date',today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
     _formData.append('contenu',mesgData.contenu)
     _formData.append('status',"unread")
     _formData.append('titreAnnance',annanceData.titre)
    try{
      axios.post('http://127.0.0.1:8000/message/',_formData,{
        headers:{
          'content-type':'multipart/form-data'
        } 
      })
      .then((res)=> {
        console.log(res.data);
      });
    }catch(error){
      console.log(error) ;
    }
  }



  return (
    <section className="">
 
      <div className="ImageContact">
        <div className="ImagesName">
          <div className="TitreInfo">
            <h1>{annanceData.titre}</h1>
            <div>
              <p> localisation : {annanceData.wilaya},{annanceData.commune} ,{annanceData.adresse} ## <a href={annanceData.urlgoogleMap}>google maps link </a> </p>
              
            </div>
          </div>
          {
            photoData.map((photo)=>
            <div className="ImagesAnnonce">
            <button className='page-link'> <i class="fa-solid fa-arrow-left"></i></button>
               <img src={photo.image} />
            <button className='page-link'><i class="fa-solid fa-arrow-right"></i></button>
              </div>
            )
          }       
           <p>Prix : {annanceData.prix}DA </p>
           <p> Surface :{annanceData.surface} m²</p>
          <p>Categorie :{annanceData.categorie}</p>
           <p>Type :{annanceData.type}</p>
          
        </div>
        <div className="ContactUser">
          {/* <h3>{annanceData.idAnnanceur}  </h3> */}
          <div className="InputTextUser">
            <textarea
              onChange={handleChange}
              name='contenu'
              placeholder="Enter your message"
              rows="30"
              cols="70"
              required
              maxlength="500"
            ></textarea>
          </div>
          <div className="ButtonUser">
          
            <button onClick={formSubmit} type='button' className="button">send</button>
          </div>
          <button type="button" class="btn btn-success">{succes}</button>
        </div>
      </div>
    </section>
  )
}

export default FirstSection2
