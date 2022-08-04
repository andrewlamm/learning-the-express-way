/** @jsx jsx */
import { Image, jsx } from 'theme-ui'

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

const Codeblock = ({ children, ...props })  => (
  <code
    {...props}
    sx={{
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word', // for inline code

      wordSpacing: 'normal',
      wordBreak: 'normal',
      backgroundColor: 'sidebar',
      overflowX: 'auto',
      px: 1,
      fontSize: 2,
    }}
  >
    {children}
  </code>
)

const MdxLink = ({ children, ...props }) => {
  return (
    <a
      sx={{color: 'blue'}}
      {...props}
    >
      {children}
    </a>
  )
}

export default {
  pre: (props) => props.children,
  code: Codeblock,
  blockquote: Blockquote,
  a: MdxLink,
  img: Image,
}
