import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#282a36',
    secondary: '#f8f8f2',
    comment: '#6272a4'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default theme
