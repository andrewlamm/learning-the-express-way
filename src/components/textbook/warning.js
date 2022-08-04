/** @jsx jsx */

import { useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'

const Warning = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        mt: '26px',
        bg: '#fff9f7',
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
          borderColor: '#boxoutline',
          borderLeftColor: '#ffb4a2',
          borderWidth: isOpen ? '0px 0px 0 5px' :'0px 0px 0px 5px',
          // cursor: 'pointer',
        }}
        // onClick={() => setIsOpen(!isOpen)}
      >
        Warning
      </Box>
      <Flex
        sx={{
          pt: 0,
          pb: '11px',
          px: 3,
          borderRadius: 0, //'0px 0px 5px 5px',
          border: 'solid',
          borderColor: '#boxoutline',
          borderLeftColor: '#ffb4a2',
          borderWidth: '0 0px 0px 5px',
          display: (isOpen) ? 'inherit' : 'none',
          fontSize: [2, '17px', null],
          flexDirection: 'column',
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Warning
