import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserBar from './UserBar'
import '../CSS/AnnoncePage1.css'

const AnnonoceHeader = () => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <header className="AnnonceHeader">
      <div className="AnnonceHeader_PM">
        <div
          onClick={() => {
            setisOpen(!isOpen)
          }}
        >
          <i class="fa-solid fa-user"></i>
          <UserBar open={isOpen} />
        </div>
        <div>
          <i class="fa-brands fa-facebook-messenger"></i>
        </div>
      </div>
      <Link className="AddButton">
        <p>Add</p>
        <i class="fa-solid fa-plus"></i>
      </Link>
    </header>
  )
}

export default AnnonoceHeader
