import React from 'react'
import img from '../../Images/why_choose_pic.png'
import img1 from '../../Images/improve.png'
import '../CSS/SecondSection.css'
const SecondSection = () => {
  return (
    <section className='SecondSection'>
        <div className='textandimagechoose'>
               <div className='TextWhyChoose'><h1>Why You choose Us ? </h1></div> 
                <img src ={img}/>
        </div>
        <p className="pdescription" >Lorem velit sint est commodo cupidatat excepteur eu duis pariatur sint. Anim commodo laborum ea sit nostrud deserunt consectetur dolor in ipsum amet esse. Laboris cupidatat ipsum ut ipsum. Amet irure laborum esse commodo excepteur quis laborum. Elit aliqua proident enim aute laboris excepteur eu culpa deserunt laborum adipisicing quis.s</p>
      
        <div className='textandimageimprove'>
              <img src ={img1}/>
               <div className='Textimprove'><p>We have been improving our<span> Skills</span>  For many years  </p></div> 
                
        </div>
    </section>

  )
}

export default SecondSection