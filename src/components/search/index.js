import React, { Component } from 'react'
import {
    InstantSearch, Hits, SearchBox, Highlight, PoweredBy
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import {Link} from 'gatsby';
import {StyledLink, StyledTag} from '../../styled/pagesStyled';

const searchClient = algoliasearch(	
    'X04G7JBMWL',	
    'd996ecc7fc45c239e89d80cd291aba9b'	
  )

const Results = ({hit}) => {
    console.log(hit)
    return (
        <div style={{fontFamily:"avenir", textAlign:"center"}}>
            <StyledLink to={hit.slug}>
                <Highlight attribute="title" hit={hit} />
            </StyledLink>
            <div>{hit.excerpt}</div>
            <div style={{marginTop:"1rem"}}>
                {hit.tags.map((tag, index) => {
                  return (          
                    <StyledTag key={index}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </StyledTag>
                    )
                  })
                }
              </div>  
        </div>
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
                <InstantSearch indexName="POSTS" 
                    searchClient={searchClient}>
                    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"1rem"}}>
                    <SearchBox />
                    <PoweredBy />
                    </div>
                    <SearchHits/>
                </InstantSearch>
            </div>
        )
    }
} 