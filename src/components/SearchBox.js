import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <label 
            for="searchBox"
            style={{display:'none'}} >Search</label>
            <input
                name="searchBox"
                onChange={searchChange}
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder='search robots'/>
        </div>
    )
};

export default SearchBox;