/** @jsx jsx */
import { Link, Image, jsx } from 'theme-ui'

import { Link as AnchorLink } from 'react-scroll'

const MdLink = ({ href, children, external, ...props }) => {
  return href[0] === '#' ? (
    <AnchorLink
      href={href}
      to={href.substring(1)}
      smooth={true}
      duration={400}
      hashSpy={true}
      {...props}
    >
      {children}
    </AnchorLink>
  ) : (
    <Link
      href={href}
      target='_blank'
      rel='nofollow noopener noreferrer'
      {...props}
    >
      {children}
    </Link>
  )
}

const Blockquote = ({ children, ...props }) => (
  <blockquote
    {...props}
    sx={{
      m: 0,
      p: '0.1rem 1.5rem',
      bg: 'primary',
      borderLeft: '3px solid',
      borderLeftColor: '#000000',
    }}
  >
    {children}
  </blockquote>
)

export default {
  pre: (props) => props.children,
  a: MdLink,
  blockquote: Blockquote,
  img: Image,
}
