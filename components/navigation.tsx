import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Drawer from './drawer';
import LocaleToggle from './locale';

import { useRouter } from 'next/router';
const Navigation: React.FunctionComponent = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
        <header className='flexi-w  h-20 flex items-center px-4 '>
            <nav className='w-full flex justify-between items-center '>
                <ul className='text-pale-100 items-center gap-12 hidden invisible lg:flex lg:visible lg:w-full '>
                    <li className={` ${router.asPath === '/' && 'font-bold text-white'} `}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className={` ${router.asPath.includes('blog') && 'font-bold text-white'}`}>
                        <Link href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                    <li className={` ${router.asPath.includes('snippet') && 'font-bold text-white'}`}>
                        <Link href='/snippets'>
                            Snippets
                        </Link>
                    </li>
                    <li className={` ${router.asPath === '/about' && 'font-bold text-white'} lg:mr-auto`}>

                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                    <li className={` ${router.asPath === '/story' && 'font-bold text-white  items-center '}`}>
                        <LocaleToggle />
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