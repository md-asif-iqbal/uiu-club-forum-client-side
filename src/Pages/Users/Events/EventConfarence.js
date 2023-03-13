import React from 'react';

const EventConfarence = () => {
    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center py-16'>About This Conference</h1>

            <div className='shadow-lg grid lg:grid-cols-2 grid-cols-1 gap-10 items-center mx-10 '>
                    <div className=''>
                        <img className='' src="https://curtiscoulter.wpenginepowered.com/wp-content/uploads/2016/03/conference-attendees-1024x675.jpg" alt=""/>
                    </div>
                    <div>
                        <h1 className='font-bold text-purple-800 text-2xl'>Marketing Conference</h1>
                        <h4 className='text-xl mt-5 mb-3'>This October 2018</h4>
                        <p>Marrem ipsum dolor sit amet, consectetur adipisicing elit, 
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                              ut aliquip ex ea commodo consequat.co laboris nisi ut aliquip ex ea commodo
                               consequat.</p>
                               <button type="register" className='border mt-5 bg-yellow-400 p-3 px-5 rounded text-black font-bold '>READ MORE</button>
                    </div>
            </div>
        </div>
    );
};

export default EventConfarence;