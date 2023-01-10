import React from 'react'
import '../CSS/FindMoreSection.css'
import imgannonce from '../../Images/AnnonceVendre.jpg'

const CardAnnonce = (props) => {
  return (
    <div className="CardAnnonce">
      <h2>{props.annance.titre}</h2>
      <img src={imgannonce} alt="" />
      <div className="localisation_price_card">
        <div>{props.annance.commune}</div>
        <div>{props.annance.prix}</div>
      </div>

      <div className="etat_date_card">
        <p>{props.annance.date}</p>
        <div>
          <p>Details</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default CardAnnonce
