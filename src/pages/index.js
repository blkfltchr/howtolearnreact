import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {IndexWrapper, StyledExcerpt, StyledLink, StyledTag} from '../styled/pagesStyled';

const Layout = ({data, pageContext}) => {
  const { edges } = data.allContentfulBlogPost
  return (
    
    <div>
      <Header />
      
      <IndexWrapper>
        {edges.map((edge) => {
          return (
            <div style={{margin: '1rem'}}>
              <StyledLink to={edge.node.slug}>
                {edge.node.title}
              </StyledLink>
              <StyledExcerpt to={edge.node.slug}><p>{edge.node.excerpt}</p></StyledExcerpt>
              <div>
                {edge.node.tags.map((tag, index) => {
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
        })}
      </IndexWrapper>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allContentfulBlogPost(
      sort: {fields: [date], order: ASC}
      limit: 6
    ) {
      edges {
        node {
          title
          slug
          body {
            id
            body
          }
          date
          tags
          excerpt
        }
      }
    }
  }
`

export default Layout