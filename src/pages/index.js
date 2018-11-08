import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {IndexWrapper, StyledExcerpt, StyledLink, StyledTag, PaginationWrapper, IndexPrevNext} from '../styled/pagesStyled';

const Layout = ({data, pageContext}) => {
  const { edges } = data.allContentfulBlogPost
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  console.log("isFirst", isFirst)
  console.log("currentpage", currentPage)
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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
      sort: {fields: [date], order: ASC},
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
          date
          tags
          excerpt
        }
      }
    }
  }
`

export default Layout