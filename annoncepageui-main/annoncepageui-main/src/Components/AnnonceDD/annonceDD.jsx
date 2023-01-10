import React from 'react'
import SecondHeader from '../SecondPage/SecondHeader'
import '../CSS/userADD.css'
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const House = ({ house }) => {
  const {
    imageLg,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house
}
const Header = () => {
  return (
    <section>
      {/* <SecondHeader /> */}
      {/* <div className="userText">
        <h1>
          Hey Name , Here you can Find All your annonce that u already posted it
        </h1>
      </div>
      <Link to="/contactuser">
        <div className="bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
          <img className="mb-8" src={house.imageLg} alt="" />
          <div className="mb-4 flex gap-x-2 text-sm">
            <div className="bg-green-500 rounded-full text-white px-3 inline-block">
              {house.type}
            </div>
            <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
              {house.country}
            </div>
          </div>
          <div className="text-lg font-semibold max-w-[260px]">
            {house.address}
          </div>
          <div className="flex gap-x-4 my-4">
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[20px] rounded-full">
                <BiBed />
              </div>
              <div> {house.bedrooms} </div>
            </div>
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[20px] rounded-full">
                <BiBath />
              </div>
              <div> {house.bathrooms} </div>
            </div>
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[20px] rounded-full">
                <BiArea />
              </div>
              <div> {house.surface} </div>
            </div>
          </div>
          <div className="text-lg font-semibold text-violet-600 mb-4">
            {house.price}DA
          </div>
          <div className="flex-left mb-4">
            {' '}
            <FaHeart />{' '}
          </div>
        </div>
        ;
      </Link> */}
    </section>
  )
}

export default Header
