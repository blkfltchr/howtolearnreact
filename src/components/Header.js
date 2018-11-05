import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {HeaderWrapper, HeaderP, HeaderTag} from './styled';

import logo from '../images/logo.png'

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
      <HeaderTag to='/tags'>Browse by Tag</HeaderTag>
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
