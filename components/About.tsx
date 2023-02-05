import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <>
    <motion.div
    className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='https://ik.imagekit.io/s05gjtvyzd4/tr:h-600/about_EU4uQevdv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674744954293'
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true
        }}
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p className='text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit laboriosam enim corrupti quam cupiditate mollitia quo quis placeat, totam exercitationem saepe ducimus, soluta est. Alias, quidem itaque tempora praesentium enim a iure dolorum ipsam beatae repudiandae. Nemo doloribus unde omnis error minus sapiente aliquid accusamus laborum, vitae officiis mollitia iusto.
            </p>
        </div>
    </motion.div>
    </>
  )
}

export default About