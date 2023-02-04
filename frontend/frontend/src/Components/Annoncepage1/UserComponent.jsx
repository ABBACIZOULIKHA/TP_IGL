
import React from 'react'
import AnnonoceHeader from '../Annoncepage1/AnnonoceHeader'
import PrincpalFooter from '../FirstPage/PrincipalFooter'
import '../CSS/ListUtilisateurs.css'
const UserComponent = (props) => {
  return (
    
      <div className="ListBsection">
        <div>
          <div className="ElementList">
            <p> Name : {props.user.nom} </p>
            <p>Email : {props.user.prenom}</p>
            <p>Phone number : {props.user.telephone} </p>
            <p> Adresse : {props.user.adresse}</p>
          </div>
        </div>
      </div>
   
  )
}

export default UserComponent
