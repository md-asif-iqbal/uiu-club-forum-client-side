import React from "react";

import "./Pagination.css";

const Pagination = ({ totalItem, postsPerPage, setCurrentPage, currentPage, }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItem / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='paginations'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
