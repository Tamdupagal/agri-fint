import Footer from '../components/SharedPages/Footer'
import Header from '../components/SharedPages/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
