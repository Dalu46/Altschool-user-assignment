import React from "react";
import '../pagination.css'

const Pagination = ({ postPerpage, totalPost, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPost / postPerpage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map((num) => 
                    <li key={num}>
                        <a onClick={() => paginate(num)} href="!#">
                            {num}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination;