import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {IndexWrapper, StyledExcerpt, StyledLink, StyledTag, PaginationWrapper, IndexPrevNext} from '../styled/pagesStyled';
import {BrowseWrapper, BrowseTags, StyledBrowseTag} from '../styled/componentsStyled';

const Layout = ({data, pageContext}) => {
  const { edges } = data.allContentfulBlogPost
  let { currentPage, numPages } = pageContext
  const isFirst = currentPage === undefined
  if (isFirst === true ) {
    currentPage = 1
  }
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  console.log("edges.node", edges.node) 
  return (  
    
    <div>
      <Header />
      <BrowseTags>Browse by tag:</BrowseTags>
    <BrowseWrapper>
      
      {data.allContentfulTag.edges.map((tag, index) => {
        return (
          <StyledBrowseTag key={index}>
            <Link to={`/tags/${tag.node.slug}`}>{tag.node.slug}</Link>
          </StyledBrowseTag>
        )
      })}
      </BrowseWrapper>
      <IndexWrapper>
        {edges.map((edge, index) => {
          return (
            <div key={index} style={{margin: '1rem'}}>
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
        <PaginationWrapper>
        {
          !isFirst &&
          <IndexPrevNext to={prevPage} rel="prev">← Previous Page</IndexPrevNext>
        }
        {
          Array.from({ length: numPages }, (_, index) => (
            <li key={`pagination-number${index + 1}`}>
            
              <Link 
                to={`/${index === 0 ? '' : index + 1}`}
                style={{
                  padding: "1rem",
                  textDecoration: 'none',
                  color: index + 1 === currentPage ? '#ffffff' : '#0076ca', 
                  background: index + 1 === currentPage ? '#0076ca' : '',
                  fontWeight: "bold"
                }}>
                {index + 1}
              </Link>
            </li>
          ))
        }
        {
          !isLast &&
          <IndexPrevNext to={nextPage} rel="next">Next Page →</IndexPrevNext>
        }
        </PaginationWrapper>
      </IndexWrapper>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery($skip: Int) {
    allContentfulBlogPost(
      sort: {fields: [createdAt], order: ASC},
      limit: 4,
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          body {
            id
            body
          }
          createdAt
          tags
          excerpt
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          slug
          posts {
            id
            slug
          }
        }
      }
    }
  }
`

export default Layout