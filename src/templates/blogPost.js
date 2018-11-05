import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {BlogPostWrapper, PrevNext, PrevNextButton, StyledTag} from '../styled/templatesStyled';

const Template = ({data, pageContext}) => {
  console.log(pageContext)
  const prev = pageContext.prev
  const next = pageContext.next
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
            (<PrevNextButton to={prev.slug}>
              Previous post
            </PrevNextButton>)
          }
        </div>
        <div>
          {next &&
            (<PrevNextButton to={next.slug}>
              Next post
            </PrevNextButton>)
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

