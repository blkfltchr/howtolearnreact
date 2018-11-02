import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components';

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
  text-align: center;
`

const StyledExcerpt = styled(Link)`
  text-decoration: none;
  color: black;
`

const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: #0076ca;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0.5rem;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transition: all 0.5s ease-in-out 0s;
  }

  :hover::after {
    transform: scaleX(1);
`

const StyledTag = styled.span`
  margin-right: 24px;
  padding: 4px;
  background-color: #a700ff;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 3px;
  }
`

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <IndexWrapper>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div style={{margin: '1rem'}}>
              <StyledLink to={frontmatter.path}>
                {frontmatter.title}
              </StyledLink>
              <StyledExcerpt to={frontmatter.path}><p>{frontmatter.excerpt}</p></StyledExcerpt>
              <div>
                {frontmatter.tags.map((tag, index) => {
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

        <div>
          <Link to='/tags'>Browse by Tag</Link>
        </div>
      </IndexWrapper>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
            tags
          }
        }
      }
    } 
  }
`

export default Layout