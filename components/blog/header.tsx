import React from 'react';
import Image from 'next/image'
import type { Blog } from '.contentlayer/types'
type Props = {
    post: Blog
};
export default function Header({ post }: Props) {
    return <header className='flexi-w grid gap-4 p-4'>
        <h1 className='text-display text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal '>{post.title}</h1>
        <div className='flex text-white justify-between items-center'>
            <div className='flex gap-4'>
                <div className='w-12 aspect-square relative'>
                    <Image src="/static/profile.jpg" alt="header" layout='fill' className='rounded-full' />
                </div>
                <span className='text-pale-100 text-sm'>Arkar Kaung Myat <br /> {post.publishedAt}</span>
            </div>
            <div className='text-pale-100'>
                {post.readingTime.text}
            </div>
        </div>
    </header>;
}
