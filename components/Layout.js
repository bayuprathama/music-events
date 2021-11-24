import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({title, description, keywords, children}) {
  
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      {router.pathname === '/' && <Showcase />}
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