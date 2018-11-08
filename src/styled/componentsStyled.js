import styled from 'styled-components';

/* Header styles */

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
  color: white;
  text-decoration: none;
  background-image: linear-gradient(#a700ff, #7500b3);
  margin-bottom: 1.45rem;
    img {
      height: 200px;
    }
`

export const HeaderP = styled.p`
  margin-top: 0;
  opacity: 0.5
`

/* Browse by tags styling */

export const BrowseWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: avenir;
`

export const BrowseTags = styled.div`
  font-size: 18px; 
  margin-top: 3px; 
  font-weight: bold; 
  margin-right: 13px
`

export const StyledBrowseTag = styled.span`
  margin-right: 24px;
  padding: 4px;
  background-color: #62DAFC;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 3px;
  }

  :hover {
    
    background-color: #ffffff;
    border: solid 2px #62DAFC;

    a {
      color: #62DAFC;
    }
  }
`