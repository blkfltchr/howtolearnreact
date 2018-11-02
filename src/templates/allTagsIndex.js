import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';

const AllTagsTemplate = ({data, pageContext}) => {
  const { tags } = pageContext
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${tagName}`}>
                  {tagName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate