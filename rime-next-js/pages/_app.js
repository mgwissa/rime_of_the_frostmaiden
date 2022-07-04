import Layout from '../components/layout/layout.component'
import { ThemeProvider } from '@mui/system'
import theme from '../theme/theme';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}