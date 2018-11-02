import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components'

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
`

const AllTagsTemplate = ({data, pageContext}) => {
  const { tags } = pageContext
  return (
    <div style={{fontFamily: 'avenir'}}>
     <Header />
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <StyledTag key={index}>
                <Link to={`/tags/${tagName}`}>
                  {tagName}
                </Link>
              </StyledTag>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate