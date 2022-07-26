// import '@fontsource/inter'

const theme = {
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: 'Times New Roman, serif',
    heading: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 48, 64, 96],
  lineHeights: {
    body: 1.4,
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#e5989b',
    secondary: '#bc5151',
    accent: '#6d6875',
    secondarydark: '#818181',
    headingbg: '#fAf9f7',
    heading: '#b3808a',
    sidebar: '#f3f2f1',
    highlight: '#f0dbdc',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      fontSize: 3,
      lineHeight: 'body',
    },
    b: {
      color: 'primary',
      fontWeight: 900,
    },
    h1: {
      marginTop: '36px',
      marginBottom: 0,
      fontFamily: 'heading',
      fontWeight: 230,
      fontSize: '32px',
      color: 'heading',
    },
    h2: {
      marginTop: '22px',
      marginBottom: 0,
      fontFamily: 'body',
      fontSize: '20px',
      fontWeight: 600,
      color: 'heading',
    },
    h3: {
      marginTop: 3,
      marginBottom: 2,
      fontFamily: 'body',
      color: 'heading',
    },
    h4: {
      marginTop: 3,
      marginBottom: 2,
      fontFamily: 'body',
      color: 'heading',
    },
    p: {
      marginTop: '6px',
      marginBottom: '8px',
      marginLeft: 0,
      marginRight: 0,
    },
    code: {
      '.boolean, .number': { color: '#EF9CDA' },
      '.property, .class-name, .constant, .symbol, .variable': {
        color: '#ffa500',
      },
      '.keyword, .tag, .selector, .doctype': {
        color: 'red',
      },
    }
  },
  sizes: {
    container: 1200,
  }
}

export default theme
