import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ariel Pierce Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ariel Pierce Art!" />
        <p className="description">
          This site is a work in progress
        </p>
      </main>

      <Footer />
    </div>
  )
}
