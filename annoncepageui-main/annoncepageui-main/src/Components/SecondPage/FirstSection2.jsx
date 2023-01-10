import React from 'react'
import annonceimg from '../../Images/AnnonceVendre.jpg'

import '../CSS/FirstSection2.css'

const FirstSection2 = () => {
  return (
    <section className="">
      <div className="ImageContact">
        <div className="ImagesName">
          <div className="TitreInfo">
            <h1>Titre de l'annonce AI</h1>
            <div>
              <p>Localisation , commune</p>
              <p>Prix : 11313153DA</p>
            </div>
          </div>
          <div className="ImagesAnnonce">
            <i class="fa-solid fa-arrow-left"></i>
            <img src={annonceimg} />
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <p>Catégorie , Type</p>
        </div>
        <div className="ContactUser">
          <h3>Name of the user </h3>
          <div className="InputTextUser">
            <textarea
              placeholder="Enter your message"
              rows="30"
              cols="70"
              required
              maxlength="500"
            ></textarea>
          </div>
          <div className="ButtonUser">
            <div className="report">
              <p>Report</p>
              <i class="fa-light fa-exclamation"></i>
            </div>
            <button className="button">send</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection2
