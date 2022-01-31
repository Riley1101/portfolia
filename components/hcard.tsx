import React from 'react'
import { BlogType } from '@/types/index';
import Link from 'next/link';
import type { Blog } from '.contentlayer/types';
interface Props {
    post: Blog
}

const HCard: React.FunctionComponent<Props> = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`} passHref={true}>
            <article className='grid gap-2 lg:gap-2 cursor-pointer' >
                <h2 className="text-lg font-bold relative lg:text-xl" >{post.title}</h2>
                <p className='text-pale-100 text-sm lg:text-[1rem] leading-relaxed'>{post.summary}</p>
            </article>
        </Link>


    )
}

export default HCard;