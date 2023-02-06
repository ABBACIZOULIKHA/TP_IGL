import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserBar from './UserBar'
import '../CSS/AnnoncePage1.css'
import axios from 'axios'

const AnnonoceHeader = () => {

  const [msgs,setmsgs]=useState([]) ;

  useEffect(()=> {
        fetchData('http://127.0.0.1:8000/MessageFiltreStatus/unread') ;
        }) ;
    
  function fetchData(baseurl){
          fetch(baseurl)
          .then(response => response.json())
          .then((data) => {
            setmsgs(data.results) ;
             }) ;
             
         }     
  const [isOpen, setisOpen] = useState(false)

  
   

  return (
    <header className="AnnonceHeader">
      <div className="AnnonceHeader_PM">
        <div
          onClick={() => {
            setisOpen(!isOpen)
          }}
        >
          <div class="dropdown">
            <i class="fa-solid fa-user" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </i>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <Link to ={'/MonCompte'}> <a class="dropdown-item" href="#">My account</a></Link>
             <Link to ={'/MyAnnonces'}><a class="dropdown-item" href="#">List of posted ads</a></Link>
             <Link to ={'/ListUsers'}> <a class="dropdown-item" href="#">Users list</a></Link>
            </div>
          </div>
          {/* <i class="fa-solid fa-user"></i>
          <UserBar open={isOpen} /> */}
        </div>
        <div>
        <Link to ={'/ListMessages'}><i class="fa-brands fa-facebook-messenger"><span class="float-end badge bg-danger mt-l">{msgs.length}</span></i></Link>
        </div>
      </div>
      <Link className="AddButton">
      <Link to ={'/addannonce'}> <p>Add</p></Link>
        <i class="fa-solid fa-plus"></i>
      </Link>
    </header>
  )
}

export default AnnonoceHeader
