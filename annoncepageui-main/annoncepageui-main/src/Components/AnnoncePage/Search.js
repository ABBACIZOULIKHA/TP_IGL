import React, { useContext } from 'react';
// import components
import CountryDropdown from './CountryDropdown';
import ProperityDropdown from './ProperityDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { RiSearch2Line } from 'react-icons/ri';
import Footer from './Footer';
import { HouseContext } from './HouseContext';

const Search = () => {
    const handleClick = useContext(HouseContext);

    return (
        <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4  bg-white lg:bg-transparent rounded-lg
        '>
            <CountryDropdown />
            <ProperityDropdown />
            <Footer />
            <PriceRangeDropdown />
            <button
                onClick={() => {
                    handleClick();
                }
                }
                className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
                <RiSearch2Line />
            </button>
        </div>
    );
};
export default Search;
