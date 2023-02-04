import React from 'react'
import img1 from '../../Images/AnnonceVendre.jpg'
import img2 from '../../Images/AnnonceVendre.jpg'
import img3 from '../../Images/AnnonceVendre.jpg'
import img4 from '../../Images/AnnonceVendre.jpg'

import './test'
import '../CSS/ForthSection.css'
import PrincipalFooter from './PrincipalFooter'
const ForthSection = () => {
  return (
    <section className="Forthsection" id="aboutus">
      <script src="test.js"></script>
      <h1>About Us</h1>
      <p>
        Adipisicing commodo aliquip amet aliquip dolor ullamco deserunt velit
        amet cillum laboris magna adipisicing sunt. Est ad ullamco eu labore
        duis cupidatat irure. Sit magna sint veniam officia anim id nostrud anim
        incididunt aute qui do. Velit eu sunt irure non sit proident pariatur
        irure. Esse consequat qui esse ex nulla et tempor quis sunt. Qui velit
        Lorem mollit velit sunt et. Pariatur ex magna nostrud velit voluptate
        eiusmod do minim ea quis commodo eiusmod deserunt deserunt.
      </p>
      <div className="FirstImages">
        <img src={img1} />
        <img src={img1} />
      </div>
      <div className="SecondImages">
        <img src={img1} />
        <img src={img1} />
      </div>

      <PrincipalFooter />
    </section>
  )
}

export default ForthSection
