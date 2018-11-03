import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components';

const BlogPostWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  font-family: avenir;
`

const PrevNext = styled.div`
  display: flex;
  justify-content: space-between;
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

const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext

  const {allContentfulBlogPost} = data
  const title = allContentfulBlogPost.title
  const tags = allContentfulBlogPost.tags
  const body = allContentfulBlogPost.body.body
  return (
    <div>
      <Header />
      <BlogPostWrapper>
      <h1>{title}</h1>
      {tags.map((tag, index) => {
                return (
                  <StyledTag key={index}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </StyledTag>
                  )
                })
              }
      <div>{body}</div>
      <PrevNext>
        <div>
          {prev &&
            <Link to={prev.path}>
              Prev: {`${prev.title}`}
            </Link>
          }
        </div>
        <div>
          {next &&
            <Link to={next.path}>
              Next: {`${next.title}`}
            </Link>
          }
        </div>
      </PrevNext>
      </BlogPostWrapper>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    contentfulBlogPost( slug: {eq: $pathSlug} ) {
      title
      slug
      tags
      body {
        id
        body
      }
    }
  }
`

export default Template

