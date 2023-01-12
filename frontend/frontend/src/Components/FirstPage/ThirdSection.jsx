import React from 'react'
import '../CSS/ThirdSection.css'
import img from '../../Images/undraw_stepping_up_g6oo (1).png'
import './test'
const ThirdSection = () => {
  return (
    <section id="name">
      <div className="first_skills">
        <img src={img} className="imgskills" />
        <h1 className="textskills">
          We have been improving our skills for years from Now{' '}
        </h1>
      </div>

      <div className="second_skills">
        <div className="card">
          <h3>Hard Work </h3>
          <p>Our work depends on our hard work .jdlqsf lkdjf qsdjl fdqs</p>
          <div>
            <p>Read More</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card1">
          <h3>Hard Work </h3>
          <p>Our work depends on our hard work .jdlqsf lkdjf qsdjl fdqs</p>
          <div>
            <p>Read More</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card2">
          <h3>Hard Work </h3>
          <p>Our work depends on our hard work .jdlqsf lkdjf qsdjl fdqs</p>
          <div>
            <p>Read More</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
