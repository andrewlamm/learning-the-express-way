/** @jsx jsx */

import { useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'
import Markdown from 'markdown-to-jsx'

const OtherInfo = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        mt: '26px',
        bg: '#fffcf6',
      }}
    >
      <Box
        sx={{
          fontSize: 4,
          fontWeight: 700,
          px: 3,
          pt: '10px',
          pb: '4px',
          borderRadius: 0, // isOpen ? '5px 5px 0px 0px' : '5px 5px 5px 5px',
          border: 'solid',
          borderColor: 'boxoutline',
          borderLeftColor: '#FFE6A7',
          borderWidth: isOpen ? '0px 0px 0 5px' :'0px 0px 0px 5px',
          // cursor: 'pointer',
        }}
        // onClick={() => setIsOpen(!isOpen)}
      >
        Other Information
      </Box>
      <Box
        sx={{
          pt: 0,
          pb: '11px',
          px: 3,
          borderRadius: 0, //'0px 0px 5px 5px',
          border: 'solid',
          borderColor: 'boxoutline',
          borderLeftColor: '#FFE6A7',
          borderWidth: '0 0px 0px 5px',
          display: (isOpen) ? 'inherit' : 'none',
        }}
      >
        <Markdown
          sx={{
            fontSize: [2, '17px', null]
          }}
        >
          {children}
        </Markdown>
      </Box>
    </Flex>
  )
}

export default OtherInfo
