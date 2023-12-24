import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.png"
      />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      {/* <link
        rel="mask-icon"
        href="/favicon.svg"
        color="#000000"
      /> */}
      {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      {/* <meta name="msapplication-TileColor" content="#000000" /> */}
      {/* <meta name="msapplication-config" content="/browserconfig.xml" /> */}
      {/* <meta name="theme-color" content="#000" /> */}
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      <meta
        name="description"
        content={`Adele's Blog.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
