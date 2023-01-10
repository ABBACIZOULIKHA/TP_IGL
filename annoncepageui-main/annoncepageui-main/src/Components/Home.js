import Banner from './AnnoncePage/Banner';
import React from 'react'
import HouseList from './AnnoncePage/HouseList';
import Searchbar from './AnnoncePage/Searchbar';

const Home = () => {
    return (
        <div className='min-h-[1800px]'>
            <Banner />

            <Searchbar />

            <div className='py-3'>
                <HouseList />
            </div>
        </div>
    );
};
export default Home;
