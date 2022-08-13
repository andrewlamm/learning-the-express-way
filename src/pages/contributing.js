/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'

import Seo from '../components/helmet'
import Header from '../components/header'

const OutsideLink = ({ link, children, ...props }) => {
  return (
    <a href={link} sx={{color: 'blue'}} {...props}>{children}</a>
  )
}

const SectionText = ({ heading, children, ...props}) => {
  return (
    <Box>
      <Box
        sx={{
          mt: '15px',
          fontSize: [3, '19px', null],
          fontWeight: 800,
          fontFamily: 'heading',
        }}
        {...props}
      >
        {heading}
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

const ContributingHeading = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        fontSize: [5, 7, null],
        fontWeight: 200,
        fontFamily: 'heading',
        color: 'heading',
        mt: '30px',
        mb: '15px',
      }}
      {...props}
    >
      {children}
    </Box>
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
        <ContributingHeading>Contributing to Learning the Express Way</ContributingHeading>
        <Box
          sx={{
            mt: 1,
          }}
        >
          The github repository for this site can be found <OutsideLink link="https://github.com/superandybean/learning-the-express-way">here</OutsideLink>, and your contributions are greatly appreciated.
          Whether it's a bug report or a new lesson, all improvements are welcome. This webpage will walk you through the contributing process and ensure that your contribution will be sucessful. You can find similar instructions on the CONTRIBUTING.md file found <OutsideLink link="https://github.com/superandybean/learning-the-express-way/blob/master/CONTRIBUTING.md">here</OutsideLink>.
        </Box>
        <SectionText heading="Reporting Bugs">
          Before submitting a bug report, please check out <OutsideLink link="https://github.com/superandybean/learning-the-express-way/issues">this list of reported issues</OutsideLink>. and make sure that your bug has not already been reported. When reporting your bug, please be as specific as possible, such as including steps to reproduce the bug, screenshots, device and browser, etc. In addition, add screenshots if necessary.
          When submitting the report <OutsideLink link="https://github.com/superandybean/learning-the-express-way/issues/new">here</OutsideLink>, please use a clear and concise title, and also tag the issue with the "bug" tag.
        </SectionText>
        <SectionText heading="Suggesting Enhancements">
         Similarly to submitting a bug report, please check out <OutsideLink link="https://github.com/superandybean/learning-the-express-way/labels/enhancement">this list</OutsideLink> to see if your suggestion has already been suggested. When creating the enhancement post, please be as precise and clear as possible, including images if necessary. Additionally, use a clear title and tag the issue with the "enhancement" tag.
        </SectionText>
        <SectionText heading="Contributing Code">
          To contribute your own code, firstly you must create a fork of the repository using this link <OutsideLink link="https://github.com/superandybean/learning-the-express-way/fork">here</OutsideLink>. Then, clone your repository to copy the code to your machine.
          <Box>
            Then, you can begin adding your code. To test it, run the commands
          </Box>
          <Box>
            <pre
              sx = {{
                fontSize: [2, '17px', null],
              }}>
              npm install <br />
              gatsby develop
            </pre>
          </Box>
          <Box>
            and then view the webpage on <code sx = {{fontSize: [2, '17px', null],}}>localost:8000</code>. After you're satisfied with the result, you can create a pull request <OutsideLink link="https://github.com/superandybean/learning-the-express-way/compare">here</OutsideLink>.
            In the pull request, please add specific details of what you changed/fixed, such as documentation changes, bug fixes, or enhancements, and also provide screenshots if necessary. Additionally, when creating your request, be sure to tag it under the appropriate tag.
          </Box>
        </SectionText>
        <SectionText heading="Submitting a Lesson">
          To create your own lesson, first follow the steps above in the contributing code section to create a clone of this repository. Then, create a markdown (.md or .mdx) file with an appropriate name in the <OutsideLink link="https://github.com/superandybean/learning-the-express-way/tree/master/lessons">lessons folder</OutsideLink> An mdx file is recommended as it allows you to use textbook elements.
          <Box>
            In the heading of the markdown file, add the code
          </Box>
          <Box>
            <pre
              sx = {{
                fontSize: [2, '17px', null],
              }}>
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
            <pre
              sx = {{
                fontSize: [2, '17px', null],
              }}>
              - title: 'EXAMPLE TITLE' <br />
                &nbsp;&nbsp;description: 'Example description.' <br />
                &nbsp;&nbsp;extraLessson: true
            </pre>
          </Box>
          <Box>
            where the title name matches exactly with the one found in your markdown file. Additionally, provide a short 1-2 sentence summary of your lesson with the description argument.
            After that, submit a pull request mentioning what you added in your lesson and tag your pull request with the "new lesson" tag.
          </Box>
        </SectionText>
        <ContributingHeading
          sx={{
            mt: '35px',
          }}
        >
          Authors
        </ContributingHeading>
        <Box>
          nom
        </Box>
      </Box>
    </Flex>
  )
}

export default ContributingPage
