"use client"
import { toUrl } from '@/utils/to-url'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { PortableTextBlock} from 'sanity'
type Props = {
    value : PortableTextBlock[]  
}

export default function TableOfContents({ value }: Props) {
  const [toggle,setToggle] = useState(false)
  const headings :any[]= value.filter(e=>e.style==='h2')
  const titles= headings.map(e=>e?.children[0].text)
  useEffect(()=>{
    const screen = typeof window !== 'undefined' && window.screen.width;
    if(screen && screen > 1024) setToggle(true)
  },[])
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className='lg:sticky lg:top-2 lg:p-4 left-0'>
        <span onClick={()=>setToggle(!toggle)} className='bg-theme-accent-opaque cursor-pointer max-w-max px-4 py-2 rounded-md font-bold uppercase mb-4 block text-theme-primary'>
            Table of Contents
        </span>
        {
            toggle && 
            <ul className=' flex p-4 flex-col gap-2 max-w-max bg-theme-accent-opaque'>
            {
            titles.map(e=>(<li key={e} className="text-theme-body hover:text-theme-accent">
                        <Link href={`#${toUrl([e])}`} className="cursor-pointer" onClick={handleScroll}>
                        {e}
                        </Link>         
                        </li>))
            }

            </ul>
        }
    </div>
  )
}
