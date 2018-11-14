import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {HeaderWrapper, HeaderP, BrowseWrapper, BrowseTags, StyledBrowseTag} from '../styled/componentsStyled';
import logo from '../images/logo.png'

const TitleAndDescription = ({data}) => {
  const description = data.site.siteMetadata.description

  return (
    <div>
    <HeaderWrapper>
      <Link to="/search"><b style={{position: "absolute", top: "8px", right: "12px",fontSize: "18px", color: "white"}}>Search <span role="img" aria-label="Search">&#128269;</span></b></Link>
      <Link to="/">
          <img src={logo} alt="How to learn react logo" />
      </Link>
      <HeaderP>
        {description}
      </HeaderP>
    </HeaderWrapper>
    <BrowseTags>Browse by tag:</BrowseTags>
    <BrowseWrapper>
      
      {data.allContentfulTag.edges.map((tag, index) => {
        return (
          <StyledBrowseTag key={index}>
            <Link to={`/tags/${tag.node.slug}`}>{tag.node.slug}</Link>
          </StyledBrowseTag>
        )
      })}
      </BrowseWrapper>
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
          allContentfulTag {
            edges {
              node {
                slug
                posts {
                  id
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
