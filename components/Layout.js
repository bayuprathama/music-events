import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

export default function Layout({title, description, keywords, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

        <Header />
      <div className={styles.container}>
        {children}

      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Music Events',
  keywords: 'music, musik, event, audio, rock, metal, pop, concert',
  description: 'Find the best concert in your area'
}