import React from 'react'
import Link from 'next/link'
const Hero: React.FunctionComponent = () => {
    return (
        <main className='p-4 m-2 lg:m-0 text-white  rounded-lg lg:p-4 cursor-pointer threeD glass'>
            <div className='flex justify-between flex-col gap-4 lg:flex-row '>
                <div className=''>
                    <hgroup className='grid lg:gap-2'>
                        <h1 className='text-3xl text-display font-bold lg:text-2xl'>Arkar Kaung Myat</h1>
                        <h2 className='text-white'>Inspiring frontend developer</h2>
                    </hgroup>
                    <p className='my-2 text-pale-100 text-sm italic'>An inspiring frontend developer
                        <br className='hidden lg:block' />
                        who loves frontend technlogies,coding and designs.</p>
                </div>
            </div>
            <Link href='https://docs.google.com/document/d/12a-1QOBN-7CCbTBi4z3NuGXRg9Ihi0BXK3sDccfw4Vo/edit?usp=sharing'>
                <a className={`text-sm`}>My Projects</a>
            </Link>

        </main>

    )
}

export default Hero;