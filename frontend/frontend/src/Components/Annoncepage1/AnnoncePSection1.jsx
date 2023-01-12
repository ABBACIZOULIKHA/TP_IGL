import React from 'react'
import '../CSS/AnnoncePage1.css'
import img from '../../Images/house-banner.png'
const AnnoncePSection1 = () => {
  return (
    <section className="PageAnnonces">
      <div className="AnnoncesIF">
        <h1>
          Find you Dream<span> House</span> with us
        </h1>
        <img src={img} />
      </div>
      <div className="SearchAnnonce">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Rechercher votre annnonce" />
      </div>

      {/* this is the filtrage bare  */}
      <div className="FilterItems">
        <div className="FilterThis">
          <i class="fa-solid fa-location-arrow"></i>
          <div>
            <p>Willaya </p>
            <span>Search your Willaya</span>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>

        <d iv className="FilterThis">
          <i class="fa-solid fa-location-arrow"></i>
          <div>
            <p>Commune </p>
            <span>Search your Commune</span>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </d>

        <div className="FilterThis">
          <i class="fa-solid fa-location-arrow"></i>
          <div>
            <p>Type </p>
            <span>Search your Type</span>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>

        <div className="FilterThis">
          <i class="fa-solid fa-location-arrow"></i>
          <div>
            <p>Periode </p>
            <span>Search your Periode</span>
          </div>
          <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <button className="ButtonSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </section>
  )
}

export default AnnoncePSection1
