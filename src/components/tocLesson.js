/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from 'react-scroll'

const TableOfContentsLesson = ({ items: baseItems, root = true, depth, ...props }) => {
  return (
    <Box
        {...props}
        sx={{
            // listStyle: 'none',
            // paddingLeft: depth*10,
            // paddingRight: '3px',
            // marginTop: root ? '0.7px' : 0,
            marginBottom: root ? '0.7px' : 0,
        }}
    >
      {baseItems.map(({ url, title, items }) => (
        <Box key={url}
          sx={{
            // py: '1.5px',
          }}
        >
          <Link
            href={url}
            to={url.substring(1)}
            smooth={true}
            duration={400}
            hashSpy={true}
            sx={{
              fontWeight: 'normal',
              color: 'accent',
              textDecoration: 'none',
              width: '100%',
              display: 'block',
              paddingLeft: depth*25+10,
              paddingRight: 2,
              py: '2px',
              '&:hover': {
                bg: 'highlight',
              },
            }}
          >
            {title}
          </Link>
          {items && <TableOfContentsLesson items={items} root={false} depth={depth+1} />}
        </Box>
      ))}
    </Box>
  )
}

export default TableOfContentsLesson
