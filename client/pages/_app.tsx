import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppWrap } from '../components/wrappers/'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <AppWrap>
      <Component {...pageProps} />
    </AppWrap>
  )
}

export default MyApp
