import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components'

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

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  const TAGNAMEUC = tagName.toUpperCase();
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <IndexWrapper>
          <h1>POSTS ABOUT {TAGNAMEUC}</h1>
          {posts.map((post, index) => {
            return (
             <div style={{margin: '0 0 1.45rem 0'}}>
              <div key={index}>
                <StyledLink to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </StyledLink>
                <StyledExcerpt to={post.frontmatter.path}><p>{post.frontmatter.excerpt}</p></StyledExcerpt>
                <div>
                {post.frontmatter.tags.map((tag, index) => {
                  return (
                    <StyledTag key={index}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </StyledTag>
                    )
                  })
                }
              </div>
             </div>
            </div>
            )
          })}
      </IndexWrapper>
    </div>
  )
}

export default SingleTagTemplate