import React from 'react'
import Link from 'next/link'
import { PortableTextBlock} from 'sanity'
type Props = {
    value : PortableTextBlock[]  
}

export default function TableOfContents({ value }: Props) {
  const headings :any[]= value.filter(e=>e.style==='h2')
  const titles= headings.map(e=>e?.children[0].text)
  console.log(titles,"hello")
  return (
    <div className='lg:sticky lg:top-2 p-4 left-0'>
        <span className='font-bold uppercase mb-4 block text-theme-primary'>
            Table of Contents
        </span>
        <ul className='flex flex-col gap-2'>
            {
                titles.map(e=>(<li key={e} className="text-theme-body hover:text-theme-accent">
                    <Link href={`/#${e}`} className="cursor-pointer">
                        {e}
                    </Link>         
                </li>))
            }

        </ul>
    </div>
  )
}
