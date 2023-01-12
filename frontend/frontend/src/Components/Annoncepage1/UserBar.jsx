import React from 'react'

const UserBar = (open, { children }) => {
  if (open === false) return <div>hi</div>
  return (
    <ul className="AccountList">
      <li>Parametre de compte</li>
      <hr />
      <li>Afficher les liste </li>
      <hr />
      <li>Avoir liste d'utilisateur</li>
      <hr />
    </ul>
  )
}

export default UserBar
