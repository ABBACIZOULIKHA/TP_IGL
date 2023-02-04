import React from 'react'

import { BsPersonCircle } from 'react-icons/bs';



const Msglist = (props) => {
    return (
        <section>

            
            
                <div className="h-[85vh]  ">
                    <div className="p-4 flex items-center gap-4 hover:bg-[#ebe3ef] border-b border-[#b9c0c0]  transition-colors hover:cursor-pointer rounded-lg">
                        <div className='w-10 h-10 object-cover rounded-full'>
                             <BsPersonCircle size={35} /> 
                        </div>
                        <div className="flex-1 flex justify-between">
                            <div>
                                <strong>{props.msg.userSource}</strong>
                                <h3>Ad title:({props.msg.titreAnnance})</h3>
                                <p className="text-gray-500 text-xs">
                                   {props.msg.contenu}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500"> {props.msg.date}</div>
                        </div>
                    </div>
                 </div>
           
            
        </section>




    )
}

export default Msglist
