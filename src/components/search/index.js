import React, { Component } from 'react'
import {
    InstantSearch, Hits, SearchBox, Highlight
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

const SearchHits = () => {
    return (
        <div>
            <Hits hitComponent={Results}/>
        </div>
    )
}
 
 export default class Search extends Component {
   
    render() {
        return (
            <div>
                <InstantSearch indexName="POSTS" appId="X04G7JBMWL" 
                    apiKey="d996ecc7fc45c239e89d80cd291aba9b">
                    <SearchBox />
                    <SearchHits/>
                </InstantSearch>
            </div>
        )
    }
} 