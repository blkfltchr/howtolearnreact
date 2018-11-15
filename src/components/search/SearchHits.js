import React from 'react'
import {
    Hits
} from 'react-instantsearch-dom';
import Results from './Results'

const SearchHits = () => {
    return (
        <div>
            <Hits hitComponent={Results}/>
        </div>
    )
}

export default SearchHits