import React from 'react';
// import icons
//import { BiBed, BiBath, BiArea } from 'react-icons/bi';
//import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class House  extends React.Component{
  constructor(){
    super()
    this.state={
      data :[] ,
      
    } ;
    
  }
  fetchData(){
    fetch('http://127.0.0.1:8000/annance/')
    .then(response => response.json)
    .then((data) =>{ 
    this.setState({
      data:data 
    });
    console.log(data) ; 
  }) ;
  }
  componentDidMount(){
     this.fetchData();
  }
  
  render (){
   const ancData = this.state.data ;
  
   return()=>{  
   const rows =ancData.map((annance)=>

    <Link to ="/contactuser">
      <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img className='mb-8' src="" alt="" />
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
      {annance.type}
      </div>
      <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
      {annance.commune}
      </div>
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>{annance.adresse}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center text-gray-600 gap-1'>
      </div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div> {annance.surface} </div>
      </div>
    </div>
    <div className='text-lg font-semibold text-violet-600 mb-4'>
    {annance.prix} DA
    </div>
   

  </div>;</Link>
 ) ;
}
}
};
export default House;

