import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import apiAccess from '../communication/APIAccess';

const Search = () => {
    return (
        <div className='container'>
            <div className='searchField'>
                <form id='searchForm'>
                    <div className='row'>
                        <h1>Search</h1>
                    </div>
                    <div className='row required'>
                        <div className='row'>
                            <label htmlFor='search_term' id='search_termLabel'>Search Term: </label>
                            <input type='text' name='search_term' id='search_term' value={search_term} onChange={handleSearchTerm} />
                        </div>
                        {//need user location in submit
                        }
                        <div className='row'>
                            <label htmlFor='maximum_results_to_return' id='maximum_results_to_returnLabel'>Number of results: </label>
                            <input type='number' name='maximum_results_to_return' id='maximum_results_to_return' value={maximum_results_to_return} onChange={handleMaximumResultsToReturn} />
                        </div>
                    </div>
                    <div className='row optional'>
                        <div className='row'>
                            <label htmlFor='radius_filter' id='radius_filterLabel'>Radius (optional): </label>
                            <input type='text' name='radius_filter' id='radius_filter' value={radius_filter} onChange={handleRadiusFilter} />
                        </div>
                        <div className='row'>
                            <label htmlFor='category_filter' id='category_filterLabel'>Category (optional): </label>
                            <input type='text' name='category_filter' id='category_filter' value={category_filter} onChange={handleCategoryFilter} />
                        </div>
                        <div className='row'>
                            <label htmlFor='sort' id='sortLabel'>Sort by (optional): </label>
                            <input type='text' name='sort' id='sort' value={sort} onChange={handleSort} />
                        </div>
                    </div>
                </form>
            </div>
            <div className='searchResult'>
                        {//table of search results if exist
                        }
            </div>
        </div>
    )
};

export default Search;