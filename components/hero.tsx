import React from 'react'
import Link from 'next/link'
const Hero: React.FunctionComponent = () => {
    return (
        <main className='p-4 m-2 lg:m-0 text-white  rounded-lg lg:p-4 cursor-pointer threeD glass'>
            <div className='flex justify-between flex-col gap-4 lg:flex-row '>
                <div>
                    <hgroup className='grid lg:gap-2'>
                        <h1 className='text-3xl text-display font-bold lg:text-2xl'>Arkar Kaung Myat</h1>
                        <h2 className='text-white'>Inspiring frontend developer</h2>
                    </hgroup>
                    <p className='my-2 text-pale-100 text-sm italic'>An inspiring frontend developer
                        who loves frontend technlogies,coding and designs.</p>
                </div>
            </div>
            {/* <a target={'_blank'} href='https://read.cv/arkarkaungmyat' className={`text-md text-display`} rel="noreferrer">My Projects</a> */}

        </main >

    )
}

export default Hero;