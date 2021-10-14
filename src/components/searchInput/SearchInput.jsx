import React from 'react';
import './SearchInput.css';

export default function SearchInput({ placeholder, handleChange }) {
    return (
        <input type='search'
            className='search'
            placeholder={placeholder}
            onChange={handleChange} />
    )
}