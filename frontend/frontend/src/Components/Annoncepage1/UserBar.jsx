import React from 'react'
import { Link } from 'react-router-dom'
const UserBar = (open, { children }) => {
  
  return (
    <ul className="AccountList">
      <Link to ={'/MonCompte'}> 
      <li>Parametre de compte</li></Link>
      <hr />
      <Link to ={'/MyAnnonces'}> 
      <li>list Annonce déposer</li></Link>
      <hr />
      <Link to ={'/ListUsers'}> 
      <li>Avoir liste d'utilisateur</li></Link>
      <hr />
    </ul>
  )
}

export default UserBar
