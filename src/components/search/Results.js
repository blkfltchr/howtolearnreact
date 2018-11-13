import React from 'react'
import {
    Highlight
} from 'react-instantsearch-dom';
import {Link} from 'gatsby';

const Results = ({hit}) => {
    console.log(hit)
    return (
        <Link to={hit.slug}>
            <Highlight attribute="title" hit={hit} />
        </Link>
    )
}

export default Results