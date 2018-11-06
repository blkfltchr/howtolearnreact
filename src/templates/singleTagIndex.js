import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {TagNameIndexWrapper, TagNameStyledExcerpt, TagNameStyledLink, TagNameStyledTag} from '../styled/templatesStyled'

const SingleTagTemplate = ({data}) => {

  console.log(data.contentfulTag)
  const { slug, posts } = data.contentfulTag

  console.log(slug)

  const TAGNAMEUC = slug.toUpperCase();
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <TagNameIndexWrapper>
          <h1>POSTS ABOUT {TAGNAMEUC}</h1>
          {posts.map((post, index) => {
            return (
             <div style={{margin: '0 0 1.45rem 0'}}>
              <div key={index}>
                <TagNameStyledLink to={post.slug}>
                  {post.title}
                </TagNameStyledLink>
                <TagNameStyledExcerpt to={post.slug}><p>{post.excerpt}</p></TagNameStyledExcerpt>
                <div>
                {post.tags.map((tag, index) => {
                  return (
                    <TagNameStyledTag key={index}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </TagNameStyledTag>
                    )
                  })
                }
              </div>
             </div>
            </div>
            )
          })}
      </TagNameIndexWrapper>
    </div>
  )
}

export default SingleTagTemplate

export const pageQuery = graphql`
  query($pathSlug: String!) {
    contentfulTag(slug: { eq: $pathSlug }) {
          slug
          posts {
            id
            title
            slug
            tags
            excerpt
      }
    }
  }
`