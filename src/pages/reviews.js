import Head from 'next/head'
import Reviews from '@/components/Reviews'
import Nav from '@/components/Nav'
import Script from 'next/script'
import Footer from '@/components/Footer'


export default function ReviewsPage() {
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
          <Reviews/>
          <Footer/>
        </div>
        <Script src="https://apps.elfsight.com/p/platform.js" />
    </>
  )
}
