import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import WorkExperience from 'components/WorkExperience'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex justify-center items-center'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' 
            src="https://ik.imagekit.io/s05gjtvyzd4/about_EU4uQevdv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674744954293" 
            alt="" 
            />
          </div>
        </footer>
      </Link>
      
   </div>
  )
}