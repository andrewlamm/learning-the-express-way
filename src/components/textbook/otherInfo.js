/** @jsx jsx */

import { jsx, Box, Flex } from 'theme-ui'
import Markdown from 'markdown-to-jsx'

const OtherInfo = ({ children, ...props }) => {
    return (
        <Flex
            {...props}
            sx={{
                flexDirection: 'column',
                mt: 2,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#bbbbff',
                    fontSize: 4,
                    fontWeight: 700,
                    py: 2,
                    px: 3,
                    // borderRadius: '20px 20px 0px 0px',
                    border: 'solid',
                    borderWidth: '1px 1px 0 1px',
                }}
            >
                OTHER INFORMATION
            </Box>
            <Box
                sx={{
                    fontSize: 2,
                    pt: 1,
                    pb: 2,
                    px: 3,
                    // borderRadius: '0px 0px 20px 20px',
                    border: 'solid',
                    borderWidth: '0 1px 1px 1px',
                }}
            >
                <Markdown>
                    {children}
                </Markdown>
            </Box>
        </Flex>
    )
}

export default OtherInfo
