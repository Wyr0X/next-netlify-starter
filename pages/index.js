import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <iframe style={{width: "100%", height: "500px"}} src="https://pacificodev.deyel.com/pages/ventaDigital?product=2&partner=3" />
      </main>

      <Footer />
    </div>
  )
}
