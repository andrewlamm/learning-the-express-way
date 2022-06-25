/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Seo />
      <Header />
      <Box>
        poggies
      </Box>
    </Box>
  )
}

export default IndexPage
