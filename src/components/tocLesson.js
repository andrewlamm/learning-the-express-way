/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'react-scroll'

const TableOfContentsLesson = ({ items: baseItems, root = true, ...props }) => {
  return (
    <ul
        {...props}
        sx={{
            listStyle: 'none',
        }}
    >
      {baseItems.map(({ url, title, items }) => (
        <li key={url}>
          <Link
            href={url}
            to={url.substring(1)}
            smooth={true}
            duration={400}
            hashSpy={true}
            sx={{
              fontWeight: root ? 'bold' : 'normal',
              color: 'secondary',
              textDecoration: 'none',
            }}
          >
            {title}
          </Link>
          {items && <TableOfContentsLesson items={items} root={false} />}
        </li>
      ))}
    </ul>
  )
}

export default TableOfContentsLesson
