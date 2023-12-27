import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function loadExternalScript() {
      // @ts-ignore
      await import('focus-visible')
    }

    loadExternalScript()
  }, [])

  return (
    <PlausibleProvider domain="mochiui.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
