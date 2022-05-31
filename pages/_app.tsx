import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:any) {
  return <>
    <Navbar/>

    <Component {...pageProps} />
  </>
}

export default MyApp
