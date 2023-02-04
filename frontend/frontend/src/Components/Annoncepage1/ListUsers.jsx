import React, { useEffect, useState } from 'react'
import AnnonoceHeader from './AnnonoceHeader';
import UserComponent from './UserComponent';

function ListUsers () {
   
    const [users,setUsers]=useState([]) ;
   

    useEffect(()=> {
        fetchData('http://127.0.0.1:8000/profile/') ;
        }) ;

    function fetchData(baseurl){
          fetch(baseurl)
          .then(response => response.json())
          .then((data) => {
            setUsers(data.results) ;
             }) ;
             
         }

      //  const rows =  users.map((user) =>
            
      //    <div>
      //    <tr key={user.id}>
      //   <th scope="row">{user.id}</th>
      //   <th scope="row">{user.nom}</th>
      //   <th scope="row">{user.prenom}</th>
      //   <th scope="row">{user.telephone}</th>
      //   <th scope="row">{user.adresse}</th>
      //   </tr>
      //   </div>
      //   )   

  return (
    <div className="ListAsection">
      <AnnonoceHeader />
    { 
      users.map((user) =>< UserComponent user={user} />)
    }
    </div>
  ) 
}

export default ListUsers