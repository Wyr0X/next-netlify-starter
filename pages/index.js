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
        <iframe style={{width: "1000px", height: "500px"}} src="https://pacifico.deyel.com/pages/ventaDigital?product=2&partner=3" />
        <iframe style={{width: "1000px", height: "500px"}} src="https://pacifico.deyel.com/pages/ventaDigital?product=7&partner=3" />
      </main>

      <Footer />
    </div>
  )
}
