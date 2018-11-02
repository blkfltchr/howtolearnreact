import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../images/logo.png'

const HeaderWrapper = styled.div`
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

const HeaderP = styled.p`
  margin-top: 0;
  opacity: 0.5
`

const TitleAndDescription = ({data}) => {
  const description = data.site.siteMetadata.description

  return (
    <HeaderWrapper>
      <Link to="/">
          <img src={logo} alt="How to learn react logo" />
      </Link>
      <HeaderP>
        {description}
      </HeaderP>
    </HeaderWrapper>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
