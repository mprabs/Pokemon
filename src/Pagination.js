import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div>
            {goToPrevPage && <button className="btn btn-primary" onClick={goToPrevPage}>Previous</button>}
            {goToNextPage && <button className="btn btn-danger" onClick={goToNextPage}>Next</button>}
        </div>
    )
}
