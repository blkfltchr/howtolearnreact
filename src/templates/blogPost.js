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
  background-color: #a700ff;
  border-radius: 5px;
  color: white;
  text-decoration: none;

  :hover {
    background-color: #ffffff;
    border: solid 2px #a700ff;
    color: #a700ff;
    }
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

  :hover {
    
    background-color: #ffffff;
    border: solid 2px #a700ff;

    a {
      color: #a700ff;
    }
    }
`

const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext

  const {title, tags} = data.contentfulBlogPost

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
      <div 
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html
        }}    
      />
      <PrevNext>
        <div>
          {prev &&
            <Link to={prev.slug}>
              Prev: {`${prev.title}`}
            </Link>
          }
        </div>
        <div>
          {next &&
            <Link to={next.slug}>
              Next: {`${next.title}`}
            </Link>
          }
        </div>
      </PrevNext>
      </BlogPostWrapper>
    </div>
  )
}
//($pathSlug: String!) {eq: $pathSlug} {eq: "setting-up-a-react-environment-using-a-single-html-file"}
export const query = graphql`
  query blogPostQuery($pathSlug: String!){
    contentfulBlogPost(slug: {eq: $pathSlug}) {
      title
      slug
      tags
      body {
        childMarkdownRemark {
          html
        }
        }
      }
  }
`

export default Template

