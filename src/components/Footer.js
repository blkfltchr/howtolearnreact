import React from "react"
import {FooterWrapper, FooterParagraph} from '../styled/componentsStyled';

const Footer = () => {

  return (
    <div>
        <FooterWrapper>
            <FooterParagraph>
                <p>How To Learn React is designed and developed by me, Blake Fletcher. It is a project intended to share the things I learn while working with the UI library. As I build things, complete tutorials, read blog posts, and watch videos, I'll add to the site. I hope to eventually bring on other contributors. If interested, send me an email at <a href="mailto:blkfltchr@gmail.com">blkfltchr@gmail.com</a>.</p>
                </FooterParagraph>
        </FooterWrapper>
    </div>
  )
}

export default Footer
