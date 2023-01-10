import React from 'react'
import imgannonce from '../../Images/AnnonceVendre.jpg'
import '../CSS/FindMoreSection.css'
import CardAnnonce from './CardAnnonce'
const FindMoreSection = () => {
  return (
    <section className="FindMoreSection">
      <h1>Find More </h1>

      <div className="Annonces">
        <CardAnnonce />
        <CardAnnonce />
      </div>
    </section>
  )
}

export default FindMoreSection
