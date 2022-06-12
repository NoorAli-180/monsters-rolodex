import React from 'react';

import './searchbox.style.css'

export const SearchBox = (props) => {
    return (
        <div>
            <input type="search" placeholder="search monsters" 
        className="search"
        onChange = {props.onChange} />
        </div>
    );
}
