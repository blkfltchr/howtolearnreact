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

export const HeaderIcons = styled.div`
padding-top: 0.3rem; 
height: 2rem; 
background-color: #62DAFC; 
width: 100%; 
display: flex; 
justify-content: center
`

export const HeaderIcon = styled.a`
  right: 12px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin: 0 0.7rem;
  font-weight: bold;
`

/* Logo styling */

export const LogoImg = styled.img`
  margin-top: 1rem
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
  padding: 3px;
  font-weight: bold;
  background-color: #62DAFC;
  border: solid 2px #62DAFC;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 3px;
  }

  :hover {
    
    background-color: #ffffff;
    

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

/* Footer styles */

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-family: avenir;
  color: white;
  background-image: linear-gradient(#62DAFC, #0076ca);
  margin-top: 1rem;
`

export const FooterParagraph = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  a {
    color: white;
    font-weight: bold;
  }
`