import React from 'react';

const ClubForum = () => {
    return (
        <div className=' w-10/12 mx-auto relative'>
            <h1 className="md:text-[110px] text-4xl absolute -z-10 md:left-1/4 top-8 text-[#F7F7F7] text-center font-mono font-bold">Club & Forum</h1>
            <div className='w-10/12 mx-auto font-mono mt-28'>
                <h1 className='text-xl text-secondary font-semibold text-center mb-2'>Featured CLub & Forum </h1>
                <h1 className='text-3xl font-bold mb-20 text-secondary text-center'>Our Best Club & Forum Name</h1>
            </div>
            <marquee>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full justify-center'>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor11.png" alt="" />
                    </div>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor02.png" alt="" />
                    </div>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor03.png" alt="" />
                    </div>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://i.ibb.co/3vz7qTb/Kiewit-Corporation-Logo-wine.png" alt="" />
                    </div>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://i.ibb.co/L60h1b1/Booking-Holdings-Logo-wine.png" alt="" />
                    </div>
                    <div className='px-8 py-4 shadow-lg mr-6 border-t-4 border-[#64CEE6] rounded-md ml-10'>
                        <img className='w-44 h-28 mx-auto' src="https://the7.io/elementor-company/wp-content/uploads/sites/98/2022/06/lgcolor11.png" alt="" />
                    </div>  
                </div>
            </marquee>
        </div>
    );
};

export default ClubForum;

