import {React, useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import apiAccess from '../communication/APIAccess';

const Search = () => {
    const [search_term, setSearchTerm] = useState(null);
    const [user_location, setUserLocation] = useState(null);
    const [maximum_results_to_return, setMaxResults] = useState(10);
    const [radius_filter, setRadiusFilter] = useState(null);
    const [category_filter, setCategoryFilter] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        
    }, [])

    let handleSearchTerm = (event) => {
        let val = event.target.value;
        setSearchTerm(val);
    };

    let handleMaximumResultsToReturn = (event) => {
        let val = event.target.value;
        setMaxResults(val);
    };

    let handleRadiusFilter = (event) => {
        let val = event.target.value;
        setRadiusFilter(val);
    };

    let handleCategoryFilter = (event) => {
        let val = event.target.value;
        setCategoryFilter(val);
    };

    let handleSort = (event) => {
        let val = event.target.value;
        setSort(val);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!user_location) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    //console.log(position.coords.latitude, position.coords.longitude);
                    setUserLocation(String(position.coords.latitude) + ',' + String(position.coords.longitude));
                });
            }
        }
        apiAccess.search(search_term, user_location, radius_filter, maximum_results_to_return, category_filter, sort)
        .then(x => {
            console.log('from search: ', x);
            alert('Search complete');
        })
        .catch(e => {
            console.log(e);
            alert('An error occurred while getting search');
        })
    };

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
                        <div className='row'>
                            <Button id='submitRegister' size='lg' variant='primary' onClick={handleSubmit}>Submit</Button>
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