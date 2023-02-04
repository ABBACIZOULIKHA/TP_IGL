/* eslint-disable jsx-a11y/alt-text */
import React , { startTransition, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import img from '../../Images/backgroundimg.jpg'
import '../CSS/firstsection.css'
import { Link  } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { getProfile } from '../ApiServices'
const FirstSection = () => {
  let navigate= useNavigate();
  const [user,setUser] = useState({}) ;
  const [profils , setPorfiles ] = useState([]) ;
  const [emails , setEmails ] = useState([]) ;
  const [found,setFound] = useState({}) ;
 
  
    
  function handleCallBackResponse(response){
    console.log(response.credential)
    var userObject = jwt_decode(response.credential);
    console.log("userrrrrrrr  ",userObject) ;
    setUser(userObject);
    console.log("zzzzzz",userObject.email)
    localStorage.setItem("email",userObject.email)
    getProfile()
    .then(res => {
      console.log("ressss is hhhhhh ", res.results) ;
      console.log("myEmail is " , userObject.email)
      setPorfiles(res.results) ;
      var result = (res.results.map(e => e.email)).includes(userObject.email)
      console.log("found ? " , result)
       if (result ) {
          navigate('/annonce')
        }else {
          navigate('/profile')
        }
      
        document.getElementById("signInDiv").hidden = true ;
    })
  }
  function handleSignOut(event) {
    setUser({}) ;
    document.getElementById("signInDiv").hidden = false ;
    
    navigate('/')
   
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1022724813872-rih3cv9i3kjdk8gb1o5c6kujicfqtihm.apps.googleusercontent.com",
      callback: handleCallBackResponse
    }) ;
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline", size:"large"}
    )
  },[])
  return (
    
    <section>
      <header>
        <img src={img} />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#aboutus">About us</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
          <div id="signInDiv"></div>
          {Object.keys(user).length != 0 &&  <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}
        </ul>
      </header>
      <div className="First_section">
        <div className="WelcomingText">
          <h1>
            The whole <span>World</span> in one Website
          </h1>

          <div className="learn_more">
            <p>learn more </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="img_background">
          <img src={img} />
          <div className="arrow_bottom">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
