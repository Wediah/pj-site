import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Official website of Rev. Jennifer Kofi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        
      </main>

      
    </div>
  )
}
