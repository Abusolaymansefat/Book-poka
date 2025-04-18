import React from 'react';
import bookimage from '../../assets/pngwing 1.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center w-full p-16 m-auto bg-gray-400'>
            <div className='p-10 space-y-4'>
                <h1 className='text-5xl font-bold text-black '>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-500 hover:bg-green-900 px-8 py-6 text-2xl font-semibold'>View The List</button>
            </div>
            <div className='bg-gray-400  mx-16'>
                <img className='w-60  ' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;