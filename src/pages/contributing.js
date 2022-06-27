/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const ContributingPage = () => {
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
        this is how you can contribute!!! wow
      </Box>
    </Box>
  )
}

export default ContributingPage
