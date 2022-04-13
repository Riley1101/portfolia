// types
import type { NextPage } from 'next'
import Image from 'next/image'

// components
import Navigation from '@/components/navigation';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
import styles from '@/styles/common/btn/index.module.css';
import Meta from '@/components/blog/meta';
const About: NextPage = () => {
    let meta = {
        title: 'Arkar Kaung Myat',
        summary: 'Everything about me',
        slug: 'arkardev.space/',
        image: '/static/sharing.png',
    }
    return (
        <div className='page-container'>
            <Meta post={meta}></Meta>
            <Navigation />
            <div className='flexi-w min-h-screen p-4'>
                <h2 className='text-white block text-2xl font-normal lg:text-4xl lg:font-bold '>About</h2 >
                <div className='w-full aspect-video relative mt-8'>
                    <Image src={'/static/profile.jpg'} alt='Selfie of mine' layout='fill' objectFit='cover' className='rounded-md' />
                </div>
                <p className='my-4 text-pale-100 '>

                    Hey I’m <h1 className='inline'>Arkar Kaung Myat</h1> ,  an inspiring frontend developer.<br />
                    {/* Right now I’m working at <a target={"_blank"} rel="noopener noreferrer" href="https://www.facebook.com/pohmalcourierservice" className='text-display'>Pohmal Currier Service</a>  especially as an Android/iOS developer. <br /> */}
                </p>
                <p className='mt-4 text-pale-100 '> I am available if you are looking for something special in </p>
                <ul className='text-pale-100 list-disc pl-8 mb-4'>
                    <li>Web Development (Javascript, Typescript,Python)</li>
                    <li>Frontend Technologies (CSS, React, NextJS, Design Systems, Component Kits, UI Animation and delightful interfaces)</li>
                    <li>Android / iOS (React Native) </li>
                </ul>
                <p className='mt-2 text-pale-100 '>Also interested in teaching and sharing everything I have learnt. <br />
                    You can find me on <a className='text-display' target={"_blank"} rel="noopener noreferrer" href="https://www.youtube.com/channel/UC_RfEQCC3gL2AzsFFAABikg">Youtube</a>
                </p>
                <a target={"_blank"} rel="noopener noreferrer" href='https://read.cv/arkarkaungmyat' className={`${styles.btn} my-8 `}>Resume</a>

            </div>
            <MailBox />
            <Footer />
        </div>
    )
}

export default About;
