import Head from 'next/head'
import Main from '../components/Main.js'
import Music from '../components/Music.js'
import Videos from '../components/Videos.js'
import About from '../components/About.js'
import Merch from '../components/Merch.js'
import Contact from '../components/Contact.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>緩緩 Huan Huan | Official Site</title>
        <meta name="description" content="Huan Huan an indie band from Taiwan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Music />
      <Videos />
      <About />
      <Merch />
      <Contact />
    </div>
  )
}
