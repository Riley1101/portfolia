import React from 'react'
import Image from 'next/image'
import styles from '@/styles/common/btn/index.module.css'
import Link from 'next/link'
const Hero: React.FunctionComponent = () => {
    return (
        <main className='flexi-w p-4 text-white  lg:p-4'>
            <div className='flex justify-between flex-col gap-4 lg:flex-row'>
                <div className='order-1 lg:order-0'>
                    <hgroup className='grid lg:gap-2'>
                        <h1 className='text-3xl font-bold lg:text-4xl'>Arkar Kaung Myat</h1>
                        <h2 className='text-white'>Inspiring frontend developer</h2>
                    </hgroup>
                    <p className='my-3 text-pale-100'>An inspiring frontend developer <br className='hidden lg:block' /> who loves frontend technlogies,coding and designs.</p>
                </div>
                <div className='order-0 lg:order-1'>
                    <div className='relative w-[90px] aspect-square rounded-md lg:w-[150px]'>
                        <Image src='/static/profile.jpg' alt='My Beautiful Selfie' className='rounded-md' layout='fill' objectFit='cover'></Image>
                    </div>
                </div>
            </div>
            <Link href='/blogs'>
                <a className={`${styles.btn} font-bold block w-full max-w-[50%]  lg:max-w-[10em] lg:mt-4 text-center`}>Learn with me</a>
            </Link>

        </main>

    )
}

export default Hero;