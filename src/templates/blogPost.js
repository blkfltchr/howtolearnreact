import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components';

const BlogPostWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
`

const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext

  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <Header />
      <BlogPostWrapper>
      <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: html}}
        style={{
          fontFamily: 'avenir'
        }}
      />
      <div style={{marginBottom: '1rem', fontFamily: 'avenir'}}>
        {prev &&
          <Link to={prev.frontmatter.path}>
            Prev: {`${prev.frontmatter.title}`}
          </Link>
        }
      </div>
      <div style={{fontFamily: 'avenir'}}>
        {next &&
          <Link to={next.frontmatter.path}>
            Next: {`${next.frontmatter.title}`}
          </Link>
        }
      </div>
      </BlogPostWrapper>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template