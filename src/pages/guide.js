/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const GuidePage = () => {
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
        wow we guiding up in here boss
      </Box>
    </Box>
  )
}

export default GuidePage
