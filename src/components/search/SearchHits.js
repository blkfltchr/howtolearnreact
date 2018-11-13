import React from 'react'
import {
    Hits
} from 'react-instantsearch-dom';

const Results = ({hit}) => {
    console.log(hit)
    return (
        <Link to={hit.slug}>
            <Highlight attribute="title" hit={hit} />
        </Link>
    )
}

const SearchHits = () => {
    return (
        <div>
            <Hits hitComponent={Results}/>
        </div>
    )
}

export default SearchHits