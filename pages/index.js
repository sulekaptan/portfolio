import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Main  from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import logo from '../public/assets/logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Şule | Front-End Developer</title>
        <link rel="icon" href={logo} />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Nav/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
