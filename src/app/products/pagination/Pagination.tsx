import React, { Props } from "react"
import "./Pagination.scss";
export const Pagination = (props: any) => {
    //debugger
    const pageNumbers = [];
    let paginationLength: number = 8;
    let totalPages = props.totalPages;
    let currentPage = props.currentPage;
    //ToDO: correct pagination
    if (currentPage === 1) {
        if (totalPages - currentPage < paginationLength) {
            for (let i = (totalPages - paginationLength) > 0 ? totalPages - paginationLength : 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else if (totalPages - currentPage === paginationLength) {
            for (let i = currentPage; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            for (let i = currentPage; i <= currentPage + 2; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push('...');
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
    } else {
        if (totalPages - currentPage < paginationLength - 3) {
            debugger
            for (let i = (totalPages - paginationLength) > 0 ? totalPages - paginationLength + 2 : 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else if (totalPages - currentPage === paginationLength - 3) {
            debugger
            for (let i = currentPage - 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            debugger
            for (let i = currentPage - 1; i < currentPage + 2; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push('...');
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
    }
    return (
        <nav>
            <ul className="pagination">
                <li><a>First</a></li>
                {pageNumbers.map(number => (
                    <li key={number} id={number} className="page-item">
                        <a href="!#" className="page-l">
                            {number}
                        </a>
                    </li>
                ))}
                <li><a>Last</a></li>
            </ul>
        </nav>
    )
}
