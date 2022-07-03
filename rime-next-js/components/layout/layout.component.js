import Head from 'next/head'
import styles from './layout.module.css'
import Header from '../header/header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rime of the Frostmaiden</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout