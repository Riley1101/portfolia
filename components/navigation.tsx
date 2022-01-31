import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
const Navigation: React.FunctionComponent = () => {
    const router = useRouter();
    return (
        <header className='flexi-w w-full h-20 flex items-center lg:px-4'>
            <nav className='w-full flex justify-between items-center'>
                <ul className=' gap-12 hidden invisible lg:flex lg:visible '>
                    <li className={`text-pale-100 ${router.asPath === '/' && 'font-bold text-white'}`}>
                        <Link href='/' >
                            Home
                        </Link>
                    </li>
                    <li className={`text-pale-100 ${router.asPath === '/blogs' && 'font-bold text-white'}`}>
                        <Link href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                    <li className={`text-pale-100 ${router.asPath === '/snippets' && 'font-bold text-white'}`}>
                        <Link href='/snippets'>
                            Snippets
                        </Link>
                    </li>
                    <li className={`text-pale-100 ${router.asPath === '/about' && 'font-bold text-white'}`}>

                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                </ul>
                <button className='relative w-10 aspect-square lg:hidden lg:invisible' >
                    <Image src='/static/menu.svg' alt='menu for navigation' layout='fill' />
                </button>

            </nav>
        </header>

    )
}

export default Navigation;