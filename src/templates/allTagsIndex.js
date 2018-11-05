import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';
import {TagsStyledTag} from '../styled/templatesStyled'

const AllTagsTemplate = ({data, pageContext}) => {
  console.log(data)
  const { tags } = pageContext
  console.log(pageContext)
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        
          {tags.map((tagName, index) => {
            return (
              <TagsStyledTag key={index}>
                <Link to={`/tags/${tagName}`}>
                  {tagName}
                </Link>
              </TagsStyledTag>
            )
          })}
        
      </div>
    </div>
  )
}

export default AllTagsTemplate