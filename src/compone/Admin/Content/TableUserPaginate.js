import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';






function TableUserPaginate(props) {
    const { listUser, handleClickUpdate, handleClickDelete } = props
    function Items({ currentItems }) {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems && currentItems.length > 0 ? (currentItems.map((user, index) => (
                            <tr key={`tabel-list-${index}`}>
                                <td>{index + 1}</td>
                                <td>{user?.username}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    <button className='btn btn-secondary me-md-2'>View</button>
                                    <button onClick={() => handleClickUpdate(user)} className='btn btn-success me-md-2'>Update</button>
                                    <button onClick={() => handleClickDelete(user)} className='btn btn-danger'>Delete</button>

                                </td>
                            </tr>
                        ))
                        ) : (
                            <tr><td colSpan="4" style={{ textAlign: 'center' }}>not found</td></tr>)
                    }



                </tbody>
            </Table>
        );
    }

    const PaginatedItems = ({ itemsPerPage }) => {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(listUser.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(listUser.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);


        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % listUser.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }
    return (
        <>
            <PaginatedItems itemsPerPage={5} />
        </>

    );
}

export default TableUserPaginate;