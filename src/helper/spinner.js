import React from 'react';
import '../app.css';

export default function spinner() {
    return (
        <div className="spinner">
            <div className="spinner-border text-secondary" role="status">
                <span>Loading...</span>
            </div>
        </div>
    )
}
