import styled from 'styled-components';
import {Link} from 'gatsby';

/* Index styles */

export const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
  text-align: center;
`

export const StyledExcerpt = styled(Link)`
  text-decoration: none;
  color: black;
`

export const StyledLink = styled(Link)`
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

export const StyledTag = styled.span`
  margin: 0 1rem;
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

/* Pagination styles */

export const PaginationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-cntent: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-top: 2rem

  
`

export const IndexPrevNext = styled(Link)`
  color: #0076ca; 
  text-decoration: none; 
  font-weight: bold}}

  @media (max-width: 450px) {
    width: 100%;
    margin: 1rem 0;
  }

`