import React from 'react'
import img from '../../Images/SIFWA.png'
import '../CSS/Header.css'
const Header = () => {
  return (
    <header>
        <div className='Headerelements'> 
            <img src ={img}/> 
            <div >
                   <div className='language'>
                    <i class="fa-solid fa-globe"></i> 
                    <h3>English</h3>
                    </div>
                    <button className='buttonconfig'>Sign UP</button>
                
            </div>
        </div>


    </header>
  )
}

export default Header