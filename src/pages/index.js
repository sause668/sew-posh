import Head from 'next/head'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export default function Site() {
  return (
    <>
      <Head>
        <title>Sew Posh</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ff00aa"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ff00aa"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <div style={{backgroundImage: 'url("/wp-50.png")',}}>
          <Nav/>
          <Home/>
          <Footer/>
        </div>
    </>
  )
}
