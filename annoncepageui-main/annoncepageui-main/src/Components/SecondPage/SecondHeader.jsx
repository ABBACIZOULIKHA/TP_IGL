import React from 'react'
import '../CSS/SecondHeader.css'
import { Link } from 'react-router-dom'
const SecondHeader = () => {
  return (
    <div className="Header">
      <Link to="/annonces">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
      <div className="Information">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  )
}

export default SecondHeader
