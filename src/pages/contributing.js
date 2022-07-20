/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const OutsideLink = ({ link, children, ...props }) => {
  return (
    <a href={link} sx={{color: 'blue'}} {...props}>{children}</a>
  )
}

const ContributingPage = () => {
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
          Contributing to Learning the Express Way
        </Box>
        <Box
          sx={{
            mt: 1,
          }}
        >
          The github repository for this site can be found <OutsideLink link="https://github.com/superandybean/learning-the-express-way">here</OutsideLink>, and your contributions are greatly appreciated!
          Whether it's a bug report or a new lesson, all improvements are welcome. This webpage will walk you through the contributing process and ensure that your contribution will be sucessful. You can find similar instructions on the CONTRIBUTING.md file found <OutsideLink link="https://github.com/superandybean/learning-the-express-way/blob/master/CONTRIBUTING.md">here</OutsideLink>.
        </Box>
        <Box
          sx={{
            mt: 2,
            fontSize: [4, 5, null],
            fontWeight: 500,
          }}
        >
          Reporting Bugs
        </Box>
        <Box>
          Before submitting a bug report, please check out <OutsideLink link="https://github.com/superandybean/learning-the-express-way/issues">this list of reported issues</OutsideLink>. and make sure that your bug has not already been reported. When reporting your bug, please be as specific as possible, such as including steps to reproduce the bug, screenshots, device and browser, etc. In addition, add screenshots if necessary.
          A <OutsideLink link="/">recommended template</OutsideLink> is provided to help ensure that all information is provided and to help us resolve the bug quicker. When submitting the report <OutsideLink link="https://github.com/superandybean/learning-the-express-way/issues/new">here</OutsideLink>, please use a clear and concise title, and also tag the issue with the "bug" tag.
        </Box>
        <Box
          sx={{
            mt: 2,
            fontSize: [4, 5, null],
            fontWeight: 500,
          }}
        >
          Suggesting Enhancements
        </Box>
        <Box>
          Similarly to submitting a bug report, please check out <OutsideLink link="https://github.com/superandybean/learning-the-express-way/labels/enhancement">this list</OutsideLink> to see if your suggestion has already been suggested. When creating the enhancement post, please be as precise and clear as possible, including images if necessary. Additionally, use a clear title and tag the issue with the "enhancement" tag.
        </Box>
        <Box
          sx={{
            mt: 2,
            fontSize: [4, 5, null],
            fontWeight: 500,
          }}
        >
          Contributing Code
        </Box>
        <Box>
          To contribute your own code, firstly you must create a fork of the repository using this link <OutsideLink link="https://github.com/superandybean/learning-the-express-way/fork">here</OutsideLink>. Then, clone your repository to copy the code to your machine.
        </Box>
        <Box>
          Then, you can begin adding your code. To test it, run the commands
        </Box>
        <Box>
          <pre>
            npm install <br />
            gatsby develop
          </pre>
        </Box>
        <Box>
          and then view the webpage on <code>localost:8000</code>. After you're satisfied with the result, you can create a pull request <OutsideLink link="https://github.com/superandybean/learning-the-express-way/compare">here</OutsideLink>.
          In the pull request, please add specific details of what you changed/fixed, such as documentation changes, bug fixes, or enhancements, and also provide screenshots if necessary. A <OutsideLink link="">template</OutsideLink> is provided to help guide you through this and will ensure that your pull request will be as specific as possible. Additionally, when creating your request, be sure to tag it under the appropriate tag.
        </Box>
        <Box
          sx={{
            mt: 2,
            fontSize: [4, 5, null],
            fontWeight: 500,
          }}
        >
          Submitting a Lesson
        </Box>
        <Box>
          To create your own lesson, first follow the steps above in the contributing code section to create a clone of this repository. Then, create a markdown (.md or .mdx) file with an appropriate name in the <OutsideLink link="https://github.com/superandybean/learning-the-express-way/tree/master/lessons">lessons folder</OutsideLink> An mdx file is recommended as it allows you to use textbook elements.
        </Box>
        <Box>
          In the heading of the markdown file, add the code
        </Box>
        <Box>
          <pre>
            --- <br />
            title: 'EXAMPLE TITLE' <br />
            slug: /lesson/EXAMPLE_LINK <br />
            ---
          </pre>
        </Box>
        <Box>
          where the slug is an appropriate link to your lesson. Example <OutsideLink link="https://github.com/superandybean/learning-the-express-way/blob/master/lessons/exampleMd.md">.md</OutsideLink> and <OutsideLink link="https://github.com/superandybean/learning-the-express-way/blob/master/lessons/exampleMdx.mdx">.mdx</OutsideLink> files are provided, and their results are shown <OutsideLink link="https://lew.sites.tjhsst.edu/template/md">here</OutsideLink> and <OutsideLink link="https://lew.sites.tjhsst.edu/template/mdx">here</OutsideLink>, respectively.
          After that, please update the <OutsideLink link="https://github.com/superandybean/learning-the-express-way/blob/master/data/lessonList.yml">lessonList.yml</OutsideLink> file and add your lesson in the appropriate order. Use the format
        </Box>
        <Box>
          <pre>
            - title: 'EXAMPLE TITLE' <br />
              &nbsp;&nbsp;description: 'Example description.' <br />
              &nbsp;&nbsp;extraLessson: bool
          </pre>
        </Box>
        <Box>
          where the title name matches exactly with the one found in your markdown file. Additionally, provide a short 1-2 sentence summary of your lesson with the description argument. The extraLesson argument is optional; only use it if your lesson is not part of the curriculum and is considered an extra one.
          After that, submit a pull request mentioning what you added in your lesson and tag your pull request with the "new lesson" tag.
        </Box>
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: [5, 7, null],
            fontWeight: 700,
          }}
        >
          Authors
        </Box>
        <Box>
          nom
        </Box>
      </Box>
    </Flex>
  )
}

export default ContributingPage
