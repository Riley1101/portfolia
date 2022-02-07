// types
import type { NextPage } from 'next'
import { useRef, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
const Story: NextPage = () => {
    const containerRef = useRef(null)
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
            new LocomotiveScroll.default({
                el: containerRef.current,
                smooth: true
            });
        });

    }, []);
    return (

        <main ref={containerRef} className='page-container text-white overflow-hidden h-contents'>
            <nav className='p-4  mx-auto lg:w-[80%]' >
                <Link href='/' passHref>
                    <a >Back to blog</a>

                </Link>
            </nav>
            <section className='p-4 mx-auto lg:w-[80%]'>
                <div className='contents lg:grid lg:w-full lg:h-[70vh] lg:items-center'>
                    <h1 data-scroll data-scroll-speed="2" className='text-4xl uppercase font-bold text-display mb-4 leading-relaxed lg:text-[5rem] lg:font-normal lg:leading-relaxed'>Where everything <br className='none lg:block' /> begans <br /></h1>

                </div>
                <div className='grid gap-8 w-full lg:grid lg:grid-cols-2'>
                    <p data-scroll data-scroll-speed="-1" className='text-lg leading-loose'>A simple scroll library used by developers at Locomotive. Built as a layer on top of ayamflow's virtual-scroll, it provides smooth scrolling with support for parallax effects, toggling classes, and triggering event listeners when elements are in the viewport. </p>
                    <ul data-scroll data-scroll-speed="1" className='block '>
                        <li className='mb-4 border-b pb-3 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l  hover:to-pink-600 hover:from-red-400  transition-transform lg:hover:translate-x-4 lg:hover:scale-[1.05]'><span>1.</span> Projects</li>
                        <li className='mb-4 border-b pb-3 cursor-pointer  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l  hover:to-pink-600 hover:from-red-400  transition-transform lg:hover:translate-x-4 lg:hover:scale-[1.05]'><span>2.</span> Experiences</li>
                        <li className='mb-4 border-b pb-3 cursor-pointer  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l  hover:to-pink-600 hover:from-red-400  transition-transform lg:hover:translate-x-4 lg:hover:scale-[1.05]'><span>3.</span> Self</li>
                        <li className='mb-4 border-b pb-3 cursor-pointer  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l  hover:to-pink-600 hover:from-red-400  transition-transform lg:hover:translate-x-4 lg:hover:scale-[1.05]'><span>4.</span> Contact</li>
                    </ul>
                </div>
                <div className='grid gap-8 my-12 '>
                    <div className='w-full h-auto my-4 grid gap-8 items-start lg:my-8 lg:w-full lg:grid lg:grid-cols-[1fr_700px]  lg:h-[80vh] lg:items-center '>
                        <div data-scroll-delay='1' data-scroll data-scroll-speed="3" className='grid gap-2 lg:gap-4'>
                            <h2 className='text-2xl text-display lg:text-3xl'>Started in 2018 with Arduino</h2>
                            <p className='leading-loose'>All about how I started learning programming with one Arduino UNO. <br className='lg:block none' /> You get to see the contents soon! </p>
                        </div>
                        <div data-scroll data-scroll-speed="0" className='relative w-full aspect-video lg:aspect-none lg:w-full lg:h-full'>
                            <Image objectFit='cover' src={'/static/profile.jpg'} alt='background' layout='fill' />
                        </div>
                    </div>

                    <div className='w-full h-auto my-4 grid gap-8 items-start lg:my-8 lg:w-full lg:grid lg:grid-cols-[700px_1fr]  lg:h-[80vh] lg:items-center '>
                        <div data-scroll data-scroll-speed="-1" className='relative w-full aspect-video lg:aspect-none lg:w-full lg:h-full cursor-pointer'>
                            <Image objectFit='cover' src={'/static/profile.jpg'} alt='background' layout='fill' />
                        </div>
                        <div data-scroll-delay='1' data-scroll data-scroll-speed="2" className='grid gap-2 lg:gap-4 lg:pl-10'>
                            <h2 className='text-2xl text-display lg:text-3xl'>Becoming a pythonic</h2>
                            <p className='leading-loose'>Python made me love programming <br className='lg:block none' /> You get to see the contents soon! </p>
                        </div>

                    </div>
                </div>
                <div className='grid gap-8 mt-12 '>
                    <div className='w-full h-auto my-4 grid gap-8 items-start lg:my-8 lg:w-full lg:grid lg:grid-cols-[1fr_700px]  lg:h-[80vh] lg:items-center '>
                        <div data-scroll-delay='1' data-scroll data-scroll-speed="3" className='grid gap-2 lg:gap-4'>
                            <h2 className='text-2xl text-display lg:text-3xl'>Introducing React with React Native</h2>
                            <p className='leading-loose'>All about how I started learning programming with one Arduino UNO. <br className='lg:block none' /> You get to see the contents soon! </p>
                        </div>
                        <div data-scroll data-scroll-speed="0" className='relative w-full aspect-video lg:aspect-none lg:w-full lg:h-full'>
                            <Image objectFit='cover' src={'/static/profile.jpg'} alt='background' layout='fill' />
                        </div>
                    </div>

                    <div className='w-full h-auto my-4 grid gap-8 items-start lg:my-8 lg:w-full lg:grid lg:grid-cols-[700px_1fr]  lg:h-[80vh] lg:items-center '>
                        <div data-scroll data-scroll-speed="-1" className='relative w-full aspect-video lg:aspect-none lg:w-full lg:h-full cursor-pointer'>
                            <Image objectFit='cover' src={'/static/profile.jpg'} alt='background' layout='fill' />
                        </div>
                        <div data-scroll-delay='1' data-scroll data-scroll-speed="2" className='grid gap-2 lg:gap-4 lg:pl-10'>
                            <h2 className='text-2xl text-display lg:text-3xl'>Becoming a pythonic</h2>
                            <p className='leading-loose'>Python made me love programming <br className='lg:block none' /> You get to see the contents soon! </p>
                        </div>

                    </div>
                </div>
                <hr className='border-pale-50 opacity-10 mb-8 mt-6' />
                <div className='grid gap-4'>
                    <h2 className='text-2xl text-display lg:text-3xl'>Projects </h2>
                    <div className='grid gap-3'>
                        <h2 className='text-md text-display lg:text-3xl'>Professionally</h2>
                        <ul className='grid gap-2'>
                            <li>Pohmal Rider Management Application</li>
                            <li>Pohmal Rider Management Webapp</li>
                            <li>Ei Sans Homemade Inspiration</li>
                            <li>Shan institute of information and technology</li>
                        </ul>
                    </div>
                    <div className='grid gap-3'>
                        <h2 className='text-md text-display lg:text-3xl'>Free/Comunnity projects</h2>
                        <ul>
                            <li>Student Voice newspaper website</li>
                            <li> Student Fresher Welcome Voting application ( Full Stack )</li>
                            <li>Routing Management application for image processing line follower robot</li>
                            <li></li>
                            <li>Shan institute of information and technology website</li>
                        </ul>
                    </div>
                </div>

            </section>
        </main>



    )
}

export default Story;


