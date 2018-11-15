import React from 'react'
import {
    Highlight
} from 'react-instantsearch-dom';
import {Link} from 'gatsby';
import {StyledLink, StyledTag} from '../../styled/pagesStyled'; 
import {ResultsWrapper, SearchTags} from '../../styled/componentsStyled'

const Results = ({hit}) => {
    return (
        <ResultsWrapper>
            <StyledLink to={hit.node.slug}>
                <Highlight attribute="node.title" hit={hit} />
            </StyledLink>
            <div><Highlight attribute="node.body.body.excerpt" hit={hit} /></div>
            <SearchTags>
                {hit.node.tags.map((tag, index) => {
                  return (          
                    <StyledTag key={index}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </StyledTag>
                    )
                  })
                }
              </SearchTags>  
        </ResultsWrapper>
    )
}

export default Results