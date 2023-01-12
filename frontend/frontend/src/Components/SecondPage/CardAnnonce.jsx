import React from 'react'
import '../CSS/FindMoreSection.css'
import imgannonce from '../../Images/AnnonceVendre.jpg'

const CardAnnonce = () => {
  return (
    <div className="CardAnnonce">
      <h2>Titre de l'annonce</h2>
      <img src={imgannonce} alt="" />
      <div className="localisation_price_card">
<<<<<<< HEAD:frontend/frontend/src/Components/SecondPage/CardAnnonce.jsx
        <div>Localisation</div>
        <div>Price</div>
=======
        <div>{props.annance.commune}</div>
        <div>{props.annance.prix} DA</div>
>>>>>>> 3a8a6fe1934851377c53be46eab2a38fe92da385:annoncepageui-main/annoncepageui-main/src/Components/SecondPage/CardAnnonce.jsx
      </div>

      <div className="etat_date_card">
        <p>01/02/2023</p>
        <div>
          <p>Details</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default CardAnnonce
