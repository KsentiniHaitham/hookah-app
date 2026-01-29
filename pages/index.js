import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Events from '../components/Events'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Huka Hookah Lounge | Premium Shisha & Chicha Testttttt</title>
        <meta
          name='description'
          content='Huka Hookah Lounge offers premium hookah, shisha, and chicha experiences. Relax, enjoy drinks, and live events in our cozy lounge.'
        />
        <meta
          name='keywords'
          content='hookah, shisha, chicha, lounge, bar, Huka, premium hookah'
        />
        <meta name='author' content='Huka Hookah Lounge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Hero />
      <About />
      <Menu />
      <Events />
      <Contact />
      <Footer />
    </>
  )
}
