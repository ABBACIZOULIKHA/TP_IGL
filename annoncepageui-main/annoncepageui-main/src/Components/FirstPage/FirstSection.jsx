/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from '../../Images/backgroundimg.jpg'
import '../CSS/firstsection.css'
import { Link } from 'react-router-dom'
const FirstSection = () => {
  return (
    <section>
      <header>
        <img src={img} />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#aboutus">About us</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
          <Link to="/signup">
            {' '}
            <button>Join Us</button>
          </Link>
        </ul>
      </header>
      <div className="First_section">
        <div className="WelcomingText">
          <h1>
            The whole <span>World</span> in one Website
          </h1>

          <div className="learn_more">
            <p>learn more </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="img_background">
          <img src={img} />
          <div className="arrow_bottom">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
