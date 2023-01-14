import React from 'react'
import { Link } from 'react-router-dom'
const UserBar = (open, { children }) => {
  if (open === false) return <div>hi</div>
  return (
    <ul className="AccountList">
      <li>Parametre de compte</li>
      <hr />
      <li>Afficher les liste </li>
      <hr />
      <Link to ={'/ListUsers'}> 
      <li>Avoir liste d'utilisateur</li></Link>
      <hr />
    </ul>
  )
}

export default UserBar
