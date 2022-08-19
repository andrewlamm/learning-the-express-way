/** @jsx jsx */

import { jsx, Flex, Box, Themed } from 'theme-ui'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/helmet'
import Header from '../components/header'

import CoverPhoto from '../images/downscale_cover.png'

const InnerLink = ({ link, children, ...props }) => {
  return (
    <Link
      to={link}
      sx={{
        color: 'black',
        fontWeight: '700',
      }}
    >
      {children}
    </Link>
  )
}

const SectionText = ({ heading, children, ...props}) => {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      {children}
    </Box>
  )
}

const IndexPage = () => {
  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <Seo />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            maxHeight: 'calc(100vw * 0.538533571)',
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
                top: ['-25px', '-40px', '-50px'],
                zIndex: -1,
              }}
            />
        </Box>
        <Flex
          sx={{
            my: 2,
            py: 2,
            px: 2,
            bg: 'white',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
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
            <SectionText>
              Learning the Express Way is a site designed to help people of all skill levels with web development. Whether you are a complete beginner or an experienced developer, this site will help you! We cover basic skills from an introduction to HTML and CSS to more advanced skills such as using OAuth for authentication. Head over to one of the links below (or in the header) to find a right place to start.
            </SectionText>
            <SectionText>
              The <InnerLink link="/guide">Guide</InnerLink> lists out the lessons and is a good place to start to find a general description of each lesson and to find out which lesson to start with.
            </SectionText>
            <SectionText>
              The <InnerLink link="/lesson/html">Lessons</InnerLink> page is where the lessons start, beginning with an introduction to HTML.
            </SectionText>
            <SectionText>
              The <InnerLink link="/contributing">Contributing</InnerLink> page is where you can find instructions on how to contribute to the site, including instructions to creating your own lesson.
            </SectionText>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default IndexPage
