import React, { Component } from 'react'
import {
    InstantSearch, Hits, SearchBox, Highlight, PoweredBy
} from 'react-instantsearch-dom';
import {Link} from 'gatsby';
import {StyledLink, StyledTag} from '../../styled/pagesStyled'; 

const Results = ({hit}) => {
    console.log("Hit", hit)
    return (
        <div style={{fontFamily:"avenir", textAlign:"center"}}>
            <StyledLink to={hit.node.slug}>
                <Highlight attribute="node.title" hit={hit} />
            </StyledLink>
            <div><Highlight attribute="node.body.body.excerpt" hit={hit} /></div>
            <div style={{marginTop:"1rem"}}>
                {hit.node.tags.map((tag, index) => {
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
                    appId= "X04G7JBMWL"
                    apiKey= "68c9d4898f0eec12443ec67ddd0a1cda">
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