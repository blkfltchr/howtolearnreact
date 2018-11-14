import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {TagNameIndexWrapper, TagNameStyledExcerpt, TagNameStyledLink, TagNameStyledTag} from '../styled/templatesStyled'
import {BrowseWrapper, BrowseTags, StyledBrowseTag} from '../styled/componentsStyled';

const SingleTagTemplate = ({data}) => {
  const { slug, posts } = data.contentfulTag

  const TAGNAMEUC = slug.toUpperCase();
  return (
    <div style={{fontFamily: 'avenir'}}>
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
      <TagNameIndexWrapper>
          <h1>POSTS ABOUT {TAGNAMEUC}</h1>
          {posts.map((post, index) => {
            return (
             <div key={index} style={{margin: '0 0 1.45rem 0'}}>
              <div>
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