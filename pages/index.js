import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Grid from '../components/Grid'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Web3s</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Hero></Hero>
        <Grid></Grid>
        <Solutions></Solutions>

      </main>

    
    </div>
  )
}
