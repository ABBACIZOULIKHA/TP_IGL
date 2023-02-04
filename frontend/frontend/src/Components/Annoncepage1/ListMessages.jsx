import React, { useEffect, useState } from 'react'
import { FaEuroSign } from 'react-icons/fa';
import AnnonoceHeader from './AnnonoceHeader';
import Msglist from './Msglist';

function ListMessages () {
   
    const [msgs,setmsg]=useState([]) ;
   

    useEffect(()=> {
        fetchData('http://127.0.0.1:8000/Mymessage/'+localStorage.getItem("email")) ;
        }) ;

        function fetchData(baseurl){
          fetch(baseurl)
          .then(response => response.json())
          .then((data) => {
            setmsg(data.results) ;
             }) ;
             
         }

      //  const rows =  msgs.map((msg) =>
            
      //    <div>
      //    <tr key={msg.id}>
        
      //    <th scope="row">{msg.id}</th>
      //   <th scope="row">{msg.userSource}</th>
      //   <th scope="row">{msg.date}</th>
      //   <th scope="row">{msg.titreAnnance}</th>
      //   <th scope="row">{msg.contenu}</th> 
      //   </tr>
      //   </div>
      //   )   

  return (
    // <table class="table">
    // <thead>
    // <div>
    //   <tr>
    //     <th scope="col">#</th>
    //     <th scope="col">--------Sender-------</th>
    //     <th scope="col">----Date-----</th>
    //     <th scope="col">---Annonce---</th>
    //     <th scope="col">-------------------Content---------------</th>
    //   </tr>
    //   </div>
    // </thead>
    // <tbody>
    // {rows}
   
  
    // </tbody>
    // </table>
    <div >
        <AnnonoceHeader />
    <div> <strong> MESSAGES </strong></div>
    <div class="top-[10px] ">            
    { 
      msgs.map((msg) =>< Msglist msg={msg} />)
    }               
    </div>  
    </div> 
  ) ;
}

export default ListMessages

