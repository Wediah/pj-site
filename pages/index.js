import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from './home'
import Navbar from './nav'
import About from './about'
import Videos from './videos'
import Music from './Music'
import Contact from './contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jennifer Kofi</title>
        <meta name="description" content="Official website of Rev. Jennifer Kofi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <Homepage/>
        <About/>
        <Videos/>
        <Music/>
        <Contact/>
        <Footer/>
      </main>

      
    </div>
  )
}
