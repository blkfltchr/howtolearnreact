import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
  const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`/` + hit.slug} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <p>
      {hit.tags.map(({ tag, slug }) => (
        <Link key={slug} to={`/tags/` + slug}>
          {tag}
        </Link>
      ))}
    </p>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
 export default PostHit 