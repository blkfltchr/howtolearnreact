import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {TagNameIndexWrapper, TagNameStyledExcerpt, TagNameStyledLink, TagNameStyledTag, SingleTagWrapper, AvenirWrapper} from '../styled/templatesStyled'
import {BrowseWrapper, BrowseTags, StyledBrowseTag} from '../styled/componentsStyled';
import {PaginationWrapper, IndexPrevNext} from '../styled/pagesStyled';

const SingleTagTemplate = ({data, pageContext}) => {
  
  const { slug, posts } = data.contentfulTag
  const TAGNAME = slug.toUpperCase();
  let { skip, limit, currentPage, numPages } = pageContext
  const isOnly = numPages === 1
  const isLast = currentPage === numPages
  const tagSlug = data.contentfulTag.slug
  const isFirst = currentPage === 1

  return (
    <AvenirWrapper>
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
          <h1>POSTS ABOUT {TAGNAME}</h1>
          {posts.slice(skip, limit * currentPage).map((post, index) => {
            return (
             <SingleTagWrapper key={index}>
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
            </SingleTagWrapper>
            )
          })}
      </TagNameIndexWrapper>
      { !isOnly &&
      <div style={{display: "flex", justifyContent: "center"}}>
      <PaginationWrapper>
        {
          !isFirst &&
          <IndexPrevNext to={`/tags/${tagSlug}/${currentPage === 2 ? '' : currentPage - 1}`} rel="prev">← Previous Page</IndexPrevNext>
        }
        {
          Array.from({ length: numPages }, (_, index) => (
            <li key={`pagination-number${index + 1}`}>
            
              <Link 
                to={`/tags/${tagSlug}/${index === 0 ? '' : index + 1}`}
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
          <IndexPrevNext to={`/tags/${tagSlug}/${currentPage === 0 ? '' : currentPage + 1}`} rel="next">Next Page →</IndexPrevNext>
        }
        </PaginationWrapper>
        </div>
        }
      <Footer />
    </AvenirWrapper>
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