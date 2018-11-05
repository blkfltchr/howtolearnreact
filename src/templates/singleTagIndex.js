import React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import {TagNameIndexWrapper, TagNameStyledExcerpt, TagNameStyledLink} from './styled'

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  const TAGNAMEUC = tagName.toUpperCase();
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <TagNameIndexWrapper>
          <h1>POSTS ABOUT {TAGNAMEUC}</h1>
          {posts.map((post, index) => {
            return (
             <div style={{margin: '0 0 1.45rem 0'}}>
              <div key={index}>
                <TagNameStyledLink to={post.path}>
                  {post.title}
                </TagNameStyledLink>
                <TagNameStyledExcerpt to={post.path}><p>{post.excerpt}</p></TagNameStyledExcerpt>
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

// export const pageQuery = graphql`
//   query($tag: String) {
//     allContentfulBlogPost(
//       limit: 2000
//       sort:{fields: date, order: ASC}
//       filter:{ tags: {in: [$tag]} }
//     ) {
//       edges {
//         node {
//           title
//           slug
//         }
//       }
//     }
//   }
// `