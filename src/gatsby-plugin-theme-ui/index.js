// import '@fontsource/inter'
import '@fontsource/open-sans'

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
    primary: '#f38472', // '#e5989b',
    accent: '#6d6875',
    highlight: '#ffd1c2',
    headingbg: '#f8f8f8',
    heading: '#be0100', //'#941b0c', // '#a9707b',
    sidebar: '#f2f2f2',
    boxoutline: '#cccccc',

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
      fontWeight: 240,
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
      fontSize: 3,
    },
    p: {
      marginTop: '6px',
      marginBottom: '8px',
      marginLeft: 0,
      marginRight: 0,
    },
    code: {
      '.token.atrule': {
        color: '#7c4dff',
      },

      '.token.attr-name': {
        color: '#39adb5',
      },

      '.token.attr-value': {
        color: '#f6a434',
      },

      '.token.attribute': {
        color: '#f6a434',
      },

      '.token.boolean': {
        color: '#7c4dff',
      },

      '.token.builtin': {
        color: '#39adb5',
      },

      '.token.cdata': {
        color: '#39adb5',
      },

      '.token.char': {
        color: '#39adb5',
      },

      '.token.class': {
        color: '#39adb5',
      },

      '.token.class-name': {
        color: '#6182b8',
      },

      '.token.comment': {
        color: '#aabfc9',
      },

      '.token.constant': {
        color: '#7c4dff',
      },

      '.token.deleted': {
        color: '#e53935',
      },

      '.token.doctype': {
        color: '#aabfc9',
      },

      '.token.entity': {
        color: '#e53935',
      },

      '.token.function': {
        color: '#7c4dff',
      },

      '.token.hexcode': {
        color: '#f76d47',
      },

      '.token.id': {
        color: '#7c4dff',
        fontWeight: 'bold',
      },

      '.token.important': {
        color: '#7c4dff',
        fontWeight: 'bold',
      },

      '.token.inserted': {
        color: '#39adb5',
      },

      '.token.keyword': {
        color: '#7c4dff',
      },

      '.token.number': {
        color: '#f76d47',
      },

      '.token.operator': {
        color: '#39adb5',
      },

      '.token.prolog': {
        color: '#aabfc9',
      },

      '.token.property': {
        color: '#39adb5',
      },

      '.token.pseudo-class': {
        color: '#f6a434',
      },

      '.token.pseudo-element': {
        color: '#f6a434',
      },

      '.token.punctuation': {
        color: '#39adb5',
      },

      '.token.regex': {
        color: '#6182b8',
      },

      '.token.selector': {
        color: '#e53935',
      },

      '.token.string': {
        color: '#f6a434',
      },

      '.token.symbol': {
        color: '#7c4dff',
      },

      '.token.tag': {
        color: '#e53935',
      },

      '.token.unit': {
        color: '#f76d47',
      },

      '.token.url': {
        color: '#e53935',
      },

      '.token.variable': {
        color: '#e53935',
      },
    }
  },
  sizes: {
    container: 1200,
  }
}

export default theme
