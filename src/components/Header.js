import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {HeaderWrapper, HeaderP} from '../styled/componentsStyled'; // 
import {StyledTag} from '../styled/templatesStyled'
import logo from '../images/logo.png'

const TitleAndDescription = ({data}) => {
  const description = data.site.siteMetadata.description

  return (
    <div>
    <HeaderWrapper>
      <Link to="/">
          <img src={logo} alt="How to learn react logo" />
      </Link>
      <HeaderP>
        {description}
      </HeaderP>
    </HeaderWrapper>
    <div style={{display:'flex', justifyContent:"center", fontFamily:"avenir"}}>
      <div style={{fontSize:'18px', marginTop:'3px', fontWeight:'bold', marginRight:'13px'}}>Browse by tag:</div>
      {data.allContentfulTag.edges.map((tag) => {
        return (
          <StyledTag>
            <Link to={`/tags/${tag.node.slug}`}>{tag.node.slug}</Link>
          </StyledTag>
        )
      })}
      </div>
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
