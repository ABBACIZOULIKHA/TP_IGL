import React from 'react'
import SecondHeader from '../SecondPage/SecondHeader'
import '../CSS/ProfileAccount.css'
const ProfileAccount = () => {
  return (
    <section>
      <SecondHeader />
      <div className="Profile">
        <div className="ProfilePageH">
          <p>Profile Page</p>
        </div>
        <div className="ProfileInformations">
          <h1>PublicProfile</h1>
          <p>People contacting you will use these informations </p>
          <div className="PhotoProfile">
            <p>Photo</p>
            <div className="ImageProfile">
              <div>
                <img />
              </div>
              <button>Change</button>
            </div>
          </div>
          <div className="WritingInformations">
            <div className="Info">
              <p>First Name</p>
              <input />
            </div>
            <div className="Info">
              <p>Last Name</p>
              <input />
            </div>
            <div className="Info">
              <p>Phone Number</p>
              <input />
            </div>
            <div className="Info">
              <p>Your email</p>
              <input />
            </div>
            <div className="Info">
              <p>Your username</p>
              <input />
            </div>
            <div className="About">
              <p>About</p>
              <textarea />
            </div>
          </div>
        </div>
      </div>
      <div className="Save">
        <button className="reset">Reset </button>
        <button>Save </button>
      </div>
    </section>
  )
}

export default ProfileAccount
