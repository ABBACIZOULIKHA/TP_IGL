import React from 'react'
import { BsFileX } from 'react-icons/bs'
import AnnonoceHeader from '../Annoncepage1/AnnonoceHeader'
import '../CSS/AnnoncePage1.css'

import PrincipalFooter from '../FirstPage/PrincipalFooter'
import CardAnnonce from '../SecondPage/CardAnnonce'
const AnnonceDD = () => {
  const Name = 'Name'
  const sectionstyle = {
    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column',
  }
  return (
    <seciton style={sectionstyle}>
      <AnnonoceHeader />
      <h1 className="FindAnnoncesText">
        Hey {Name} , Here You Can Find all your annonces
      </h1>
      <div className="AnnoncesC">
        <CardAnnonce />
        <CardAnnonce />
        <CardAnnonce />
        <CardAnnonce />
        <CardAnnonce />
        <CardAnnonce />
      </div>
      <PrincipalFooter />
    </seciton>
  )
}

export default AnnonceDD
