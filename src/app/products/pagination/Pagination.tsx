import React, { Component } from "react"
import "./Pagination.scss";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onChangePage: (value: number) => void;
}

export class Pagination extends Component<PaginationProps, { choosenPage: number }> {
    constructor(props: PaginationProps) {
        super(props)

        this.state = {
            choosenPage: props.currentPage
        }

        this.paginationLength = 8;
        this.totalPages = props.totalPages;
        this.currentPage = props.currentPage;
    }

    currentPage: number;
    totalPages: number;
    pageNumbers: Array<any> = [];
    paginationLength: number;

    handlePaginationClick = (e: any) => {
        this.setState({
            choosenPage: Number(e.target.id)
        }, () => {
            this.props.onChangePage(this.state.choosenPage)
        })
    }

    render() {
        this.pageNumbers = [];
        if (this.currentPage === 1) {
            if (this.totalPages - this.currentPage < this.paginationLength) {
                for (let i = (this.totalPages - this.paginationLength) > 0 ? this.totalPages - this.paginationLength : 1; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            } else if (this.totalPages - this.currentPage === this.paginationLength) {
                for (let i = this.currentPage; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            } else {
                for (let i = this.currentPage; i <= this.currentPage + 2; i++) {
                    this.pageNumbers.push(i);
                }
                this.pageNumbers.push('...');
                for (let i = this.totalPages - 2; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            }
        } else {
            if (this.totalPages - this.currentPage < this.paginationLength - 3) {
                for (let i = (this.totalPages - this.paginationLength) > 0 ? this.totalPages - this.paginationLength + 2 : 1; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            } else if (this.totalPages - this.currentPage === this.paginationLength - 3) {
                for (let i = this.currentPage - 1; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            } else {
                for (let i = this.currentPage - 1; i < this.currentPage + 2; i++) {
                    this.pageNumbers.push(i);
                }
                this.pageNumbers.push('...');
                for (let i = this.totalPages - 2; i <= this.totalPages; i++) {
                    this.pageNumbers.push(i);
                }
            }
        }
        return (
            <nav>
                <ul className="pagination">
                    <li id={"1"}
                        onClick={this.handlePaginationClick}
                    >First</li>
                    {this.pageNumbers.map(number => (
                        <li key={number}
                            id={number}
                            className="page-item"
                            onClick={typeof number === "number" ? this.handlePaginationClick : () => { }}
                        >
                            {number}
                        </li>
                    ))}
                    <li
                        id={this.totalPages.toString()}
                        onClick={this.handlePaginationClick}
                    >Last</li>
                </ul>
            </nav >
        )
    }
}
