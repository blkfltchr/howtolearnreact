import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <div>
        Posts about {`${tagName}`}
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleTagTemplate