import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <div className='pa2'>
            <input type="search" placeholder="type the name" className="tc pa3 b--green bg-lightest-blue" onChange={searchChange} />
        </div>
    )
}
export default SearchBox;