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