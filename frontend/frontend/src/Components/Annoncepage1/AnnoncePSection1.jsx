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
   const [periodeString,setperiodestring]=useState(
    { 'periode':''}
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
    setperiodestring({   
          ...periodeString,
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
    const periodeAnnance = () =>{
        window.location.href='/periode/'+periodeString.periode 
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
           <select onChange={handleChange}
              name="wilaya">
                <option ></option>
                <option value="Adrar">1-Adrar</option>
                <option value="Chlef">2-Chlef</option>
                <option value="Laghouat">3-Laghouat</option>
                <option value="Oum El Bouaghi">4-Oum El Bouaghi</option>
                <option value="Batna">5-Batna</option>
                <option value="Béjaia">6-Béjaia</option>
                <option value="Biskra">7-Biskra</option>
                <option value="Béchar">8-Béchar</option>
                <option value="Blida">9-Blida</option>
                <option value="Bouira">10-Bouira</option>
                <option value="Tamanrasset">11-Tamanrasset</option>
                <option value="Tébessa">12-Tébessa</option>
                <option value="Tlemcen">13-Tlemcen</option>
                <option value="Tiaret">14-Tiaret</option>
                <option value="Tizi Ouzou">15-Tizi Ouzou</option>
                <option value="Alger">16-Alger</option>
                <option value="Djelfa">17-Djelfa</option>
                <option value="Jijel">18-Jijel</option>
                <option value="Sétif">19-Sétif</option>
                <option value="Saida">20-Saida</option>
                <option value="Skikda">21-Skikda</option>
                <option value="Sidi Bel Abbès">22-Sidi Bel Abbès</option>
                <option value="Annaba">23-Annaba</option>
                <option value="Guelma">24-Guelma</option>
                <option value="Constantine">25-Constantine</option>
                <option value="Médéa">26-Médéa</option>
                <option value="Mostaganem">27-Mostaganem</option>
                <option value="M'Sila">28-M'Sila</option>
                <option value="Mascara">29-Mascara</option>
                <option value="Ouargla">30-Ouargla</option>
                <option value="Oran">31-Oran</option>
                <option value="Bayadh">32-Bayadh</option>
                <option value="Illizi">33-Illizi</option>
                <option value="Bordj Bou Arreridj">34-Bordj Bou Arreridj</option>
                <option value="Boumerdès">35-Boumerdès</option>
                <option value="Tarf">36-Tarf</option>
                <option value="Tindouf">37-Tindouf</option>
                <option value="Tissemsilt">38-Tissemsilt</option>
                <option value="El Oued">39-El Oued</option>
                <option value="Khenchela">40-Khenchela</option>
                <option value="Souk Ahras">41-Souk Ahras</option>
                <option value="Tipaza">42-Tipaza</option>
                <option value="Mila">43-Mila</option>
                <option value="Defla">44-Defla</option>
                <option value="Naama">45-Naama</option>
                <option value="Ain Témouchent">46-Ain Témouchent</option>
                <option value="Ghardaia">47-Ghardaia</option>
                <option value="Relizane">48-Relizane</option>
                <option value="Timimoun">49-Timimoun</option>
                <option value="Bordj Baji Mokhtar">50-Bordj Baji Mokhtar</option>
                <option value="Ouled Djellal">51-Ouled Djellal</option>
                <option value="Béni Abbès">52-Béni Abbès</option>
                <option value="In Salah">53-In Salah</option>
                <option value="Guezzam">54-Guezzam</option>
                <option value="Touggourt">55-Touggourt</option>
                <option value="Djanet">56-Djanet</option>
                <option value="M'Ghair">57-M'Ghair</option>
                <option value="Meniaa">58-Meniaa</option>
              </select>
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
          <button onClick={periodeAnnance} className='btn btn-warning' type='button'>
          <i class="fa-solid fa-location-arrow"></i></button>
            <p>Periode </p>
            <span>Search your Periode</span>
            <select onChange={handleChange}
              name='periode'>
                <option ></option>
                <option value="2023">+2023</option>
                <option value="2022">2023-2022</option>
                <option value="2021">2022-2021</option>
                <option value="2020">2021-2020</option>
                <option value="2019">2020-2019</option>
              </select>
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
