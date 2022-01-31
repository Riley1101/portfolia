import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>

}

export default MyApp
