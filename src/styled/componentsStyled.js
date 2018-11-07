import styled from 'styled-components';
// import {Link} from 'gatsby';

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

// export const HeaderTag = styled(Link)`
//   color: white;
//   margin-bottom: 1rem;
//   position: absolute;
//   top: 10px;
//   left: 16px;
//   font-size: 18px;
// `