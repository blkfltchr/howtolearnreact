import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {HeaderWrapper, HeaderP, HeaderHome, HeaderSearch} from '../styled/componentsStyled';
import logo from '../images/logo.png'

const TitleAndDescription = ({data}) => {
  const description = data.site.siteMetadata.description

  return (
    <div>
    <HeaderWrapper>
      <Link to="/search"><HeaderHome>Search <span role="img" aria-label="Search">&#128269;</span></HeaderHome></Link>
      <Link to="/"><HeaderSearch><span role="img" aria-label="Home">&#127968;</span> Home</HeaderSearch></Link>
      <Link to="/">
          <img src={logo} alt="How to learn react logo" />
      </Link>
      <HeaderP>
        {description}
      </HeaderP>
    </HeaderWrapper>
    
    </div>
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
