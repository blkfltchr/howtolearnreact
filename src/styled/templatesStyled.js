import styled from 'styled-components'
import {Link} from 'gatsby'

/* /tags styles */

export const TagsStyledTag = styled.span`
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

/* Blog post styles */

export const BlogPostWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  font-family: avenir;
`

export const PrevNext = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PrevNextButton = styled(Link)`

  @media (min-width: 450px) {
    background-color: #a700ff;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    padding: 5px;

    :hover {
      background-color: #ffffff;
      border: solid 2px #a700ff;
      color: #a700ff;
      }
  }
`

export const StyledTag = styled.span`
  margin-right: 24px;
  padding: 4px;
  background-color: #a700ff;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 3px;
  }

  :hover {
    
    background-color: #ffffff;
    border: solid 2px #a700ff;

    a {
      color: #a700ff;
    }
  }
`

/* /tags/[tagName] styles */

export const TagNameIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
  text-align: center;
`

export const TagNameStyledExcerpt = styled(Link)`
  text-decoration: none;
  color: black;
`

export const TagNameStyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: #0076ca;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0.5rem;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transition: all 0.5s ease-in-out 0s;
  }

  :hover::after {
    transform: scaleX(1);
`

export const TagNameStyledTag = styled.span`
  margin-right: 24px;
  padding: 4px;
  background-color: #a700ff;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 3px;
  }

  :hover {
    
    background-color: #ffffff;
    border: solid 2px #a700ff;

    a {
      color: #a700ff;
    }
  }
`

/* Code block styling */

export const StyledMD = styled.div`

code {
  color: #a700ff;
  padding: 2px;
  font:15px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
}

pre code {
  background: #f6f9fc;
  border: 1px solid #ddd;
  border-left: 3px solid #62DAFC;
  color: #666;
  page-break-inside: avoid;
  font:15px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
`