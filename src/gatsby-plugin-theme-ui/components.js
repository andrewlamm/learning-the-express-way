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
  <div
    sx={{
      backgroundColor: '#eeeeee',
      my: 2,
      paddingBottom: 2,
      paddingLeft: 2,
    }}
  >
    <code
      {...props}
      sx={{
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
      }}
    >
      {children}
    </code>
  </div>
)

export default {
  pre: (props) => props.children,
  code: Codeblock,
  blockquote: Blockquote,
  img: Image,
}
