/** @jsx jsx */

import { jsx, Flex, Box, Themed } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
        alignItems: 'center',
      }}
    >
      <Seo />
      <Header />
      <Box
        sx={{
          my: 2,
          maxWidth: '960px',
          mx: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: [5, 7, null],
            fontWeight: 700,
          }}
        >
          Welcome to <Themed.b>Welcome to the Express Way!</Themed.b>
        </Box>
      </Box>
    </Flex>
  )
}

export default IndexPage
