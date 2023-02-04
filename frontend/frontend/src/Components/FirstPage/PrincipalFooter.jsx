import React from 'react'
import '../CSS/ForthSection.css'
const Footer = () => {
  return (
    <footer id="contactus">
      <div className="logo_info">
        {' '}
        <h3>Meftahek</h3>
        <ul>
          <li>Why you choose us</li>
          {/* <li>Why you choose us</li>
          <li>Why you choose us</li> */}
        </ul>
      </div>
      <div className="twitted_by">
        <p>Twitted :</p>
        <p>
          Tempor ex veniam ipsum enim nulla aliquip ex fugiat. Veniam proident
          voluptate Lorem incididunt irure Lorem esse occaecat exercitation
          Lorem. Irure dolor veniam nulla et commodo eu consectetur incididunt.
          Eiusmod ipsum minim incididunt irure in. Consequat dolore laborum
          voluptate nostrud dolore aliqua fugiat nisi nulla minim ipsum anim.
        </p>
      </div>
      <div className="recherche_part">
        <div className="recherche_stuffs">
          <label>Search for :</label>
          <input className="recherche" placeholder="Entrer votre recherche" />
          <button>GO</button>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <div className="contact_us">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-light fa-envelope-open"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
