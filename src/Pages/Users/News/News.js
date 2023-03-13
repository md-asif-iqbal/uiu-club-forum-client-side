import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const News = () => {
    const [donars, setDonars] = useState([])

    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(7);

    useEffect(() => {
        const url = "https://blood-donation-ai.onrender.com/donar";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonars(data)
            })
    }, [])
    console.log(donars);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentData = donars.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <div className='mx-auto mt-20 grid w-10/12 grid-cols-1 md:grid-cols-3 gap-10 mb-20'>
                <h1 className="md:text-[100px] text-4xl absolute left-1/3 bottom-8 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Blood Donars</h1>

                {
                    currentData.map(item =>
                        <div>
                            {item.name}
                        </div>
                    )
                }
            </div>
            <Pagination
                totalItem={donars?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default News;