import React from 'react'
import type { Blog } from '.contentlayer/types'
import Link from 'next/link'
interface Props {
    blog: Blog
}
const VCard: React.FunctionComponent<Props> = ({ blog }) => {
    return (<Link href={`/blog/${blog.slug}`} passHref>
        <article className={`group grid gap-1 text-white aspect-auto glass  p-4 rounded-md cursor-pointer lg:gap-2 hover:scale-[1.01]`}>
            <h2 className="text-lg relative lg:text-xl  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l to-pink-600 from-red-400" >{blog.title}</h2>
            <p className='text-pale-100 text-sm lg:text-md'>{blog.summary}</p>
            <span className='mt-2'>{blog.publishedAt}</span>
        </article >
    </Link>


    )
}

export default VCard;