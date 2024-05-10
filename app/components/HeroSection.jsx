"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-lime-600"> 
                        Hello, I'm{" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Irpan",
                            500,
                            "Web Developer",
                            500,
                            "Fullstack Dev",
                            500,
                            "Backend Dev",
                            500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaeram fugit beatae quibusdam. </p>

                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-green-400 to-blue-500 hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-lime-400 text-white border border-lime-300 mt-3'>Download CV</button>
                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/iar-2.png"
                        alt="Hero Image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={350}
                        height={350}
                    >
                    </Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection