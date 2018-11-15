import React from 'react'
import {
    Highlight
} from 'react-instantsearch-dom';
import {Link} from 'gatsby';
import {StyledLink, StyledTag} from '../../styled/pagesStyled'; 

const Results = ({hit}) => {
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

export default Results