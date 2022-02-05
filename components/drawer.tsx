import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Drawer: React.FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
    const router = useRouter();
    if (!isOpen) return null
    return (<div className='w-full h-screen glass-bg fixed p-8 top-0 left-0 z-50 lg:z-0'>
        <div className='w-full flex text-white justify-end'>
            <Image src={'/static/close.svg'} width='32' height={'32'} onClick={() => setIsOpen(!isOpen)}></Image>
        </div>
        <ul className='w-full h-[80%]  justify-center items-center gap-12 flex flex-col my-auto text-pale-100'>
            <li className={`text-2xl ${router.asPath === '/' && 'text-white'} `}>
                <Link href='/' >
                    Home
                </Link>
            </li>
            <li className={`text-2xl ${router.asPath === '/blogs' && 'text-white'}`}>
                <Link href={'/blogs'}>
                    Blogs
                </Link>
            </li>
            <li className={`text-2xl ${router.asPath === '/snippets' && 'text-white'}`}>
                <Link href='/snippets'>
                    Snippets
                </Link>
            </li>
            <li className={`text-2xl ${router.asPath === '/about' && 'text-white'}`}>

                <Link href='/about'>
                    About
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default Drawer;