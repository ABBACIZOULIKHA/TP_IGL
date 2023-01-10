import React from 'react';
// import components
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
    return (
        <form className=' lg:bg-transparent py-2 mx-auto gap-2  bg-gray-200px rounded-full 
        flex items-center px-5 
    lg:w-[500px] lg:shadow-1 p-1 mt-300'>
            <div>
                <button className='bg-violet-700 hover:bg-violet-800 transition w-full 
                lg:max-w-[550px] h-10 rounded-lg flex justify-center items-center text-white text-lg'>
                    Search
                </button>
            </div>
            <div>
                <input className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='find your home ' />
            </div>

        </form>
    );
};
export default Searchbar;
