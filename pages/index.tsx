import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';


const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>LetsTalkSMP</title>
        <meta name="description" content="LetsTalkSMP Oficial Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
        <Image src='/logo.png' alt='' width='250' height='250'/>
        </h1>



        <div className={styles.grid}>

          <a

            className={styles.card}
          ><h2>Server: LetsTalkSMP.aternos.me</h2></a>

          <a
            className={styles.card}
          >
            <h2>Launching on June 10 2022</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          
        >
          Powered by R9 TEAM

        </a>
      </footer>
    </div>
  )
}

export default Home
