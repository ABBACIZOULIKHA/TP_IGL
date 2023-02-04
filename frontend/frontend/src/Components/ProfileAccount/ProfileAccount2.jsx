import React, { useState,useEffect } from 'react'
import SecondHeader from '../SecondPage/SecondHeader'
import '../CSS/ProfileAccount.css'
const ProfileAccount = () => {
  const [userData ,setuserData]=useState([]) ;
  const [user ,setuser]=useState([]) ;
  useEffect(()=> {
    fetchData('http://127.0.0.1:8000/ProfileParEmail/'+localStorage.getItem("email")) ;
   }) ;

  function fetchData(baseurl){
    fetch(baseurl)
    .then(response => response.json())
    .then((data) => {
      setuserData(data) ;
      setuser(userData.results[0])
      console.log("dhdhdh",userData.results[0])
       }) ;
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
              <div className="WritingInformations">
            
              <div className="Info">
                <p>First Name:</p>
                <input type="text" value={user.nom} />
              </div>
              <div className="Info">
                <p>Last Name:</p>
                <input type="text" value={user.prenom} />
              </div>
              <div className="Info">
                <p>Email:</p>
                <input type="text" value={user.email} />
              </div>
              <div className="Info">
                <p>Adresse: </p>
                <input type="text" value={user.adresse} />
              </div>
            </div>

                 </div>
      </div> 
    </section>
  )
}

export default ProfileAccount
