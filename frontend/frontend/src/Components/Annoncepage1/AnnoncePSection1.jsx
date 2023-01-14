import React from 'react'
import '../CSS/AnnoncePage1.css'
import img from '../../Images/house-banner.png'
import { useState } from 'react'
const AnnoncePSection1 = () => {
   const [searchString,setsearchstring]=useState(
    { 'search':''}
   ) ;
   const [wilayaString,setwilayastring]=useState(
    { 'wilaya':''}
   ) ;
   const [communeString,setcommunestring]=useState(
    { 'commune':''}
   ) ;
   const [typeString,settypestring]=useState(
    { 'type':''}
   ) ;
   const handleChange=(event)=>{
    setsearchstring({   
    ...searchString,
     [event.target.name]:event.target.value
    }) ;
    setwilayastring({   
      ...wilayaString,
       [event.target.name]:event.target.value
      }) ;
    setcommunestring({   
        ...communeString,
         [event.target.name]:event.target.value
        }) ;
    settypestring({   
        ...typeString,
         [event.target.name]:event.target.value
        }) ;      
    }

   const searchAnnance = () =>{
    window.location.href='/search/'+searchString.search
    }
    const wilayaAnnance = () =>{
      window.location.href='/wilaya/'+wilayaString.wilaya 
      }
    const communeAnnance = () =>{
        window.location.href='/commune/'+communeString.commune 
        }  
        const typeAnnance = () =>{
          window.location.href='/type/'+typeString.type 
          }      
  return (
    <section className="PageAnnonces">
      <div className="AnnoncesIF">
        <h1>
          Find you Dream<span> House</span> with us
        </h1>
        <img src={img} />
      </div>
      <div className="SearchAnnonce">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input  name="search" onChange={handleChange} type="text" placeholder="Rechercher votre annnonce" />
          <button onClick={searchAnnance} className='btn btn-warning' type='button'></button>
      </div>

      {/* this is the filtrage bare  */}
      <div className="FilterItems">
        <div className="FilterThis">
        <button onClick={wilayaAnnance} className='btn btn-warning' type='button'><i class="fa-solid fa-location-arrow"></i></button>
         
          <div>
            <p>Willaya </p>
            < input name="wilaya" onChange={handleChange}  type="input" placeholder="Search your Willaya"/>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>

        <div className="FilterThis">
        <button onClick={communeAnnance} className='btn btn-warning' type='button'>
          <i class="fa-solid fa-location-arrow"></i></button>
          <div>
            <p>Commune </p>
            <input  name="commune" onChange={handleChange}  type="input" placeholder="Search your Commune"/>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>

        <div className="FilterThis">
        <button onClick={typeAnnance} className='btn btn-warning' type='button'>
          <i class="fa-solid fa-location-arrow"></i></button>
          <div>
            <p>Type </p>
            <input  name="type" onChange={handleChange}  type="input" placeholder="Search your type"/>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>

        <div className="FilterThis">
          <i class="fa-solid fa-location-arrow"></i>
          <div>
            <p>Periode </p>
            <span>Search your Periode</span>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <button className="ButtonSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </section>
  )
}

export default AnnoncePSection1
