import React from "react";
import imgannonce from "../../Images/AnnonceVendre.jpg";
import "../CSS/FindMoreSection.css";
const FindMoreSection = () => {
  return (
    <section className="FindMoreSection">
      <h1>Find More </h1>

      <div className="Annonces">
        <div className="CardAnnonce">
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <p>
            {" "}
            pa conssqdf dsqd dsqf sdq f sdq ut nulla ea aliqua deserunt eu
            eiusmod. Veniam magna ipsum dolor aliqua aliqua ea eu anim
            incididunt aliqua officia veniam.
          </p>
          <div className="etat_date_card">
            <div> Etats de AI </div>
            <p>01/02/2023</p>
          </div>
        </div>

        <div className="CardAnnonce">
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <p>
            {" "}
            pa conssqdf dsqd dsqf sdq f sdq ut nulla ea aliqua deserunt eu
            eiusmod. Veniam magna ipsum dolor aliqua aliqua ea eu anim
            incididunt aliqua officia veniam.
          </p>
          <div className="etat_date_card">
            <div> Etats de AI </div>
            <p>01/02/2023</p>
          </div>
        </div>
        <div className="CardAnnonce">
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <p>
            {" "}
            pa conssqdf dsqd dsqf sdq f sdq ut nulla ea aliqua deserunt eu
            eiusmod. Veniam magna ipsum dolor aliqua aliqua ea eu anim
            incididunt aliqua officia veniam.
          </p>
          <div className="etat_date_card">
            <div> Etats de AI </div>
            <p>01/02/2023</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FindMoreSection;
