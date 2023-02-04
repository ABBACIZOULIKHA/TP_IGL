import React, { useState } from 'react'
import SecondHeader from '../SecondPage/SecondHeader'
import '../CSS/ProfileAccount.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const ProfileAccount = () => { 
  let navigate= useNavigate();
 

const [Profil , setProfil] = useState({
  nom:'',
  prenom:'',
 emaill:'',
 telephone:'',
 adresse:'',
    
  })
  
  
  const handleChange=(event)=>{
    setProfil({
      ...Profil,
      [event.target.name]:event.target.value
    })
  }
  const formSubmit =()=>{
    var emaill = localStorage.getItem("email");

    const _FormData = new FormData();
    _FormData.append('nom',Profil.nom);
    _FormData.append('prenom',Profil.prenom);
    _FormData.append('email',emaill);
    _FormData.append('telephone',Profil.telephone);
    _FormData.append('adresse',Profil.adresse);
    try{
      console.log("fooorm",_FormData)
     axios.post('http://127.0.0.1:8000/profile/',_FormData,{
      headers:{
        'content-type':'multipart/form-data'
      }
     }).then((res)=> {
      console.log(res.data)
      navigate('annonce')
     })
    }catch(error){
    console.log(error)
    }
  }
  return (
    <section>
      <SecondHeader />
      <div className="Profile">
        <div className="ProfilePageH">
          <p>Profile Page</p>
        </div>
        <div className="ProfileInformations">
          <h1>PublicProfile</h1>
          <p>People contacting you will use these informations </p>
          <div className="PhotoProfile">
            <p>Photo</p>
            <div className="ImageProfile">
              <div>
                <img />
              </div>
              <button>Change</button>
            </div>
          </div>
          <div className="WritingInformations">
            <div className="Info">
              <p>First Name</p>
              <input onChange={handleChange} name='nom'/>
            </div>
            <div className="Info">
              <p>Last Name</p>
              <input onChange={handleChange} name='prenom'/>
            </div>
            <div className="Info">
              <p>Phone Number</p>
              <input onChange={handleChange} name='telephone'/>
            </div>
            <div className="Info">
              <p>Your email</p>
              <input name='email' type='text' value={localStorage.getItem("email")} />
            </div>
            <div className="Info">
              <p>adresse:</p>
              <input  onChange={handleChange} name='adresse' />
            </div>
          
          </div>
        </div>
      </div>
      <div className="Save">
        <button className="reset">Reset </button>
        <button onClick={formSubmit}>Save </button>
      </div>
    </section>
  )
}

export default ProfileAccount
