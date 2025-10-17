import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#fafafa',
          primary: '#4E342E',
          secondary: '#F5E6CC',
          accent: '#FF7043',
          error: '#FF5252',
          info: '#2196F3',
          success: '#2E7D32',
          warning: '#FFC107',
        },
      },
    },
  },
})