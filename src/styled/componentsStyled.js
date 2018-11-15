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
  opacity: 0.5;
  text-align: center;
  max-width: 90vw;
`

export const HeaderHome = styled.b`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 18px;
  color: white
`

export const HeaderSearch = styled.b`
  position: absolute;
  top: 8px;
  left: 12px;
  fontSize: 18px;
  color: white
`

/* Browse by tags styling */

export const BrowseWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: avenir;

  @media (max-width: 450px) {
    display: none
  }
`

export const BrowseTags = styled.div`
  font-size: 18px; 
  margin-top: 3px; 
  font-weight: bold; 
  text-align: center;
  margin-bottom: 1rem;
  font-family: avenir;
  
  @media (max-width: 450px) {
    display: none
  }
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

  @media (max-width: 450px) {
    display: none
  }
`
/* Search styles */

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem
`

export const ResultsWrapper = styled.div`
  font-family: avenir; 
  text-align: center
`

export const SearchTags = styled.div`
  margin-top: 1rem  
`
