import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <form>
                <label
                style={{display:'none'}}
                for="searchbox"
                >Search: </label>
                <input
                    id="searchbox"
                    onChange={searchChange}
                    className="pa3 ba b--green bg-lightest-blue"
                    type="search" 
                    placeholder='search robots'/>
            </form>
        </div>
    )
};

export default SearchBox;