import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { SessionProvider } from "next-auth/react"
import { QueryClientProvider, } from 'react-query'
import queryClient from '@/queries/client'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </QueryClientProvider>
    </SessionProvider>
  )

}

export default MyApp
