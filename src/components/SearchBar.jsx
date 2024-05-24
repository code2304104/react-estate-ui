import React from 'react';
import './searchBar.scss';

function SearchBar() {
    return (
        <div className='searchBar'>
            <div className='type'>
                <button>Buy</button>
                <button>Rent</button>
            </div>
            <form>
                <input type='text' name='location' placeholder='City Location' />
                <input
                    type='number'
                    name='minPrice'
                    min={0}
                    max={100000}
                    placeholder='Min Price'
                />
                <input
                    type='number'
                    name='maxPrice'
                    min={0}
                    max={100000}
                    placeholder='Max Price'
                />
                <button type="submit">
                    <img src='/search.png' alt='Search' />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
