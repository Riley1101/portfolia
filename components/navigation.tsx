import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Drawer from './drawer';

import { useRouter } from 'next/router';
const Navigation: React.FunctionComponent = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
        <header className='flexi-w w-full h-20 flex items-center px-4'>
            <nav className='w-full flex justify-between items-center'>
                <ul className='gap-12 hidden invisible lg:flex lg:visible text-pale-100 '>
                    <li className={` ${router.asPath === '/' && 'font-bold text-white'} `}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className={` ${router.asPath === '/blogs' && 'font-bold text-white'}`}>
                        <Link href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                    <li className={` ${router.asPath === '/snippets' && 'font-bold text-white'}`}>
                        <Link href='/snippets'>
                            Snippets
                        </Link>
                    </li>
                    <li className={` ${router.asPath === '/about' && 'font-bold text-white'}`}>

                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                </ul>
                <button className='relative w-10 aspect-square lg:hidden lg:invisible' onClick={() => setIsOpen(!isOpen)}>
                    <Image src='/static/menu.svg' alt='menu for navigation' layout='fill' />
                </button>

            </nav>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

    )
}

export default Navigation;