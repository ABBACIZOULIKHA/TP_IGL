import React from 'react'
import img from '../../Images/setting.png'
import '../CSS/SecondSection1.css'
import './test'
const SecondSection = () => {
  return (
    <section className="sectionchoose" id="home">
      <div className="textChoose">
        <h1>Why you Choose Us ? </h1>
        <p className="whyuchoose">
          Ad nulla ullamco commodo nulla incididunt dolore qui Lorem velit. Ea
          dolor et officia aliqua esse enim eu in mollit ullamco aute elit
          nulla. Dolore tempor incididunt eu exercitation velit non dolore
          tempor et veniam. Tempor velit irure sit quis exercitation sunt
          voluptate sint amet. Qui minim ea eiusmod aute ea anim. Sit ad
          adipisicing ullamco laborum incididunt ullamco eiusmod et fugiat sint
          in consequat minim.
        </p>
      </div>
      <img src={img} />
    </section>
  )
}

export default SecondSection
