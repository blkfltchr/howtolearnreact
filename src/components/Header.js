import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {HeaderWrapper, HeaderP, HeaderIcons, HeaderIcon, LogoImg} from '../styled/componentsStyled';
import logo from '../images/logo.png'

const TitleAndDescription = ({data}) => {
  const description = data.site.siteMetadata.description

  return (
    <div>
      <HeaderWrapper>
        <HeaderIcons>
          <HeaderIcon href="/"><span role="img" aria-label="Home">🏠</span> Home</HeaderIcon>
          <HeaderIcon href="/search"><span role="img" aria-label="Magnifying glass">🔍</span> Search</HeaderIcon>
          <HeaderIcon href="mailto:blkfltchr@gmail.com?subject=Feedback for HowToLearnReact.com"><span role="img" aria-label="Megaphone">📣</span> Feedback</HeaderIcon>
        </HeaderIcons>
        <Link to="/">
            <LogoImg src={logo} alt="How to learn react logo" />
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
