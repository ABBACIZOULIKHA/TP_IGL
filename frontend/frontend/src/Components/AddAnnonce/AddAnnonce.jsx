import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/AddAnnonce.css'
import PrincipalFooter from '../FirstPage/PrincipalFooter'
import { useEffect } from 'react'
import SecondHeader from '../SecondPage/SecondHeader'
const AddAnnonce = () => {
  const [succes,setsucces]=useState([]) ;
  const[photoData,setphotoData]=useState({
    image:'',
    titreAnnance:''
  })
  const [annanceData,setannanceData]=useState({
    titre:'',
    categorie:'',
    type:'',
    surface:'',
    description:'',
    prix:'' ,
    wilaya:'',
    commune:'',
    adresse:'',
    date:'',
    EmailAnnanceur:'',
    urlgoogleMap:''
      }) ;
 
  const handleChange=(event)=>{
      setannanceData({
          ...annanceData,
          [event.target.name]:event.target.value
        })
    }
  const handlePhotoChange=(event)=>{
      setphotoData({
          ...photoData,
          [event.target.name]:event.target.files[0]
        })
    }
  const formSubmit =()=>{
      var today = new Date();
      
              setsucces(" Add successfully!");   

    
      const _formData1=new FormData();
       _formData1.append('titre',annanceData.titre);
       _formData1.append('categorie',annanceData.categorie)
       _formData1.append('type',annanceData.type)
       _formData1.append('surface',annanceData.surface)
       _formData1.append('description',annanceData.description)
       _formData1.append('prix',annanceData.prix)
       _formData1.append('wilaya',annanceData.wilaya)
       _formData1.append('commune',annanceData.commune)
       _formData1.append('adresse',annanceData.adresse)
       _formData1.append('date',today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
       _formData1.append('EmailAnnanceur',localStorage.getItem("email"))
       _formData1.append('urlgoogleMap',annanceData.urlgoogleMap)
       
      const _formData2=new FormData();
      _formData2.append('image',photoData.image);
      _formData2.append("titreAnnance",annanceData.titre) 
      try{
        axios.post('http://127.0.0.1:8000/annance/',_formData1,{
          headers:{
            'content-type':'multipart/form-data'
          } 
        });
        axios.post('http://127.0.0.1:8000/photo/',_formData2,{
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
    <section className="AddAnnonce">
      <SecondHeader />
      <div className="AddAnnoncediv">
        <div className="Text">
          <h1>Here You Can publish a new annonce</h1>
          <hr />
        </div>
        <div className="InformationsAnnonce">
          <form>
            <div>
              <label>AnnonceName: </label>
              <input   onChange={handleChange}
              name='titre'/>
            </div>
            <div>
              <label>Type: </label>
              <input  onChange={handleChange}
              name='type'/>
            </div>
            <div>
              <label>Caterorie: </label>
              <select onChange={handleChange}
              name='categorie'>
                <option>-----</option>
                <option>Vente</option>
                <option>Echange</option>
                <option>Location</option>
                <option>Location_Vacances</option>
              </select>
            </div>
            <div>
              <label>Surface(m²): </label>
              <input  onChange={handleChange}
              name='surface' id='surface' />
            </div>
            <div>
              <label>Wilaya name: </label>
              <select onChange={handleChange}
              name="wilaya" id='wilaya'>
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
            <div>
              <label>Commune: </label>
              <input  onChange={handleChange}
              name='commune' id='commune'/>
            </div>
            <div>
              <label>Adresse: </label>
              <input  onChange={handleChange}
              name='adresse' id='adresse'/>
            </div>
            <div>
              <label>Add Google Maps link: </label>
              <input  onChange={handleChange}
              name='urlgoogleMap' id='urlgoogleMap'/>
            </div>
            <div>
              <label>Prix(DA): </label>
              <input  onChange={handleChange}
              name='prix' id='prix' />
            </div>
          </form>
          <div className="AttacheImage">
            <p>Attacher Photos</p>
            <input
                 type="file"
                 onChange={handlePhotoChange}
                 name='image'
                 />
         </div>
          <div className="divDescription">
            <p>Add Description</p>
            <textarea    onChange={handleChange}
              name='description' id='description' className="AddDescription" maxlength="500"></textarea>
          </div>
        </div>
      </div>
      <div class="alert alert-success" role="alert">
                {succes}
      </div>
      <div className="buttonPublish">
        <button onClick={formSubmit} >Publsih</button>
      </div>
      
      <PrincipalFooter />
    </section>
  )
}

export default AddAnnonce
