import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
