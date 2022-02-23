import React from 'react';
type Props = {};

export default function Footer({ }: Props) {
    return <footer className='flexi-w px-4 text-white mb-8'>
        <hr className='w-3/4 mx-auto mb-6 bg-plae-100 opacity-10' />

        <div className=' lg:grid lg:grid-cols-3 text-center'>
            <ul className='grid gap-2'>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Home</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Blogs</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>About</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Snippets</li>
            </ul>
            <ul className='grid gap-2'>
                <li className='text-pale-100 cursor-pointer hover:text-white'>
                    <a href={'https://twitter.com/RileyEileen3'} target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                </li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>

                    <a href={'https://www.facebook.com/riley.eileen.75/'} target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>
                    <a href={'https://github.com/Riley1101/portfolia'} target="_blank" rel="noreferrer">
                        Github
                    </a>
                </li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>
                    <a href={'https://www.youtube.com/channel/UC_RfEQCC3gL2AzsFFAABikg'} target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </li>
            </ul>


        </div>
        <p className='text-pale-100 my-8 text-center'>
            This page was built on <br className='md:hidden cursor-pointer' />
            <a className='text-display' href={'https://nextjs.org/'} target="_blank" rel="noreferrer">
                NEXT
            </a>,
            <a className='text-display' href={'https://www.typescriptlang.org/'} target="_blank" rel="noreferrer">
                TypeScript
            </a>,
            <a className='text-display' href={'https://planetscale.com/'} target="_blank" rel="noreferrer">
                PlanetScale
            </a>,
            <a className='text-display' href={'https://prisma.io/'} target="_blank" rel="noreferrer">
                Prisma
            </a>,
            <a className='text-display' href={'https://github.com/contentlayerdev/contentlayer'} target="_blank" rel="noreferrer">
                Contentlayer
            </a>,
        </p>

    </footer>;
}
