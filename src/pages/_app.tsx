import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/dev.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
