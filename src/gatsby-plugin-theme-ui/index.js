// import '@fontsource/inter'

const theme = {
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64, 96],
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#ec5d57',
    secondary: '#bc5151',
    dark: '#c0c0c0',
    secondarydark: '#818181',
    heading: '#fAf9f7',
    sidebar: '#f3f2f1',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    b: {
      color: 'primary',
      fontWeight: 900,
    },
    code: {
      '.boolean, .number': { color: '#EF9CDA' },
      '.property, .class-name, .constant, .symbol, .variable': {
        color: '#ffa500',
      },
      '.keyword, .tag, .selector': {
        color: 'primary',
      },
    }
  },
  sizes: {
    container: 1200,
  }
}

export default theme
