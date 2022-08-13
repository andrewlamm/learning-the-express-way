/** @jsx jsx */

import { jsx, Flex, Box, Themed } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/helmet'
import Header from '../components/header'

import CoverPhoto from '../images/long_cover_image.png'

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
      <Box>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
          }}
        >
           <Header />
           {/* <StaticImage
              src="../images/long_cover_image.png"
              layout="fluid"
              quality={100}
              alt="Cover Photo"
              formats={["auto", "webp", "avif"]}
              sx={{
                height: '100vh',
                zIndex: -1,
              }}
            /> */}
            <img src={`${CoverPhoto}`}
              sx={{
                width: '100%',
                position: 'relative',
                top: '-50px',
                zIndex: -1,
              }}
            />
        </Box>
        <Box
          sx={{
            my: 2,
            py: 2,
            px: 2,
            bg: 'white',
          }}
        >
          <Box
            sx={{
              mx: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: [5, 7, null],
                fontWeight: 700,
                fontFamily: 'heading',
              }}
            >
              Welcome to <Themed.b>Learning the Express Way!</Themed.b>
            </Box>
            <Box
              sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: [3, 5, null],
                fontWeight: 700,
                fontFamily: 'heading',
              }}
            >
              Learn web development easily and quickly.
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros velit, semper non tellus et, fringilla faucibus mauris. Nunc eleifend augue quis elit condimentum, vel tincidunt turpis iaculis. Suspendisse dapibus viverra ligula, ut congue libero efficitur ut. Phasellus feugiat auctor elit eu tristique. Nam malesuada dolor sed ultrices hendrerit. Nulla tincidunt vulputate tempor. Vivamus a posuere urna. Sed imperdiet neque ultrices quam eleifend, quis sollicitudin arcu laoreet. Sed commodo ornare justo quis convallis. Sed sit amet tempus lacus. Donec molestie sed erat eu ornare. Quisque sollicitudin accumsan velit porttitor lobortis. Quisque ornare nunc nec sollicitudin vestibulum. Mauris malesuada hendrerit justo, quis feugiat sapien vulputate at.
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default IndexPage
