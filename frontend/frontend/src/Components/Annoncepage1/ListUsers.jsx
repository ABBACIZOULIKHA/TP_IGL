import React, { useEffect, useState } from 'react'

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

       const rows =  users.map((user) =>
            
         <div>
         <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <th scope="row">{user.nom}</th>
        <th scope="row">{user.prenom}</th>
        <th scope="row">{user.telephone}</th>
        <th scope="row">{user.adresse}</th>
        </tr>
        </div>
        )   

  return (
    <table class="table">
    <thead>
    <div>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Firt Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Adresse</th>
      </tr>
      </div>
    </thead>
    <tbody>
    {rows}
   
  
    </tbody>
    </table>
   
   
  ) ;
}

export default ListUsers

