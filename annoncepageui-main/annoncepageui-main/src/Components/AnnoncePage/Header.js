import React from 'react'
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';
import { FaHeart } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';


const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex'>
                <Link className='hover:text-violet-900 py-5 px-3 transition items-center' to='#/'>
                    <BsPersonCircle size="1.5em" />

                </Link>
                <Link className='hover:text-violet-900 py-5 px-3 transition items-center' to='# /'>
                    <BsMessenger size="1.5em" />

                </Link>
            </div>

            <div className='flex flex-col
         lg:flex-row items-center gap-6'>
                <Link className='hover:text-violet-900 flex py-5 px-3 transition items-center' to='/'>
                    My list
                    <FaHeart />
                </Link>
                <button
                    className='bg-violet-700 hover:bg-violet-800 text-white 
                    font-bold px-4 py-2 rounded border-b-4 border-blue-700 hover:border-blue-500  transition'
                    to='/'
                >

                    Add

                </button>
            </div>
        </div>
    )
};
export default Header;
