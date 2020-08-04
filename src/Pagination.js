import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div>
            {goToPrevPage && <button class="btn btn-primary" onClick={goToPrevPage}>Previous</button>}
            {goToNextPage && <button class="btn btn-danger" onClick={goToNextPage}>Next</button>}
        </div>
    )
}
