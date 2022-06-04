import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LetsTalkSMP - about</title>
        <meta name="about" content="About LetsTalkSMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            About
             <Image src='/logo.png' alt='' width='250' height='250'/>
        </h1>


        <div className={styles.grid}>
         <p className={styles.card} >LetsTalkSMP was created in april 2022 by R1CKY 90 aka R9</p>
        
         <p className={styles.card} >LetsTalkSMP its the successor of DevorbaSMP</p>

         <h2 className={styles.card} >The OG players are
         
         <p>RICKY 90 - Owner👑</p>
         <p>Parkourbeg - Moderator ⚖️</p>
         <p>David - member😀</p>
         
         </h2>

        </div>


         

      </main>

      <footer className={styles.footer}>
        <a
         
        >
          Powered by R9 Team
        </a>
      </footer>
    </div>
  )
}

export default Home
