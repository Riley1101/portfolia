import React from 'react';
import Navigation from '@/components/navigation';

import { allBlogs } from '.contentlayer/data'

import type { Blog } from '.contentlayer/types';
import HCard from '@/components/hcard';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
import { useBlogs } from '@/hooks/dist';
import Meta from '@/components/blog/meta';
type Props = {
    posts: Blog[],
    pinned: Blog[]
};

export default function Blogs({ posts: cases, pinned }: Props) {
    let [keyword, setKeyword] = React.useState('');
    let { posts: filteredBlogs, pinned: filteredPins } = useBlogs({ posts: cases, pinned, keyword });
    let meta = {
        title: 'Inspiring / Blog',
        summary: 'Personal blog by @arkarkaungmyat',
        slug: 'arkarkaungmyat.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/arianagrande-a231e.appspot.com/o/Inspiring%20FRontend%20Developer(1).png?alt=media&token=d50ab1d9-782d-4457-8e63-2f952832f431',
    }
    return <div className='page-container'>
        <Meta post={meta} />
        <Navigation />
        <div className='flexi-w min-h-screen p-4 text-white'>
            <h2 className='block text-2xl font-normal lg:text-4xl lg:font-bold lg:mb-2'>Blogs</h2>
            <p className='my-3 text-pale-100'>Here are a few blogs  that I love talking about .</p>
            <div className='w-full my-4'>
                <input onChange={(e): void => setKeyword(e.target.value)} type="text" placeholder='Search by name' className='p-2 rounded-md w-full bg-slate-800 px-4 focus:outline-4 focus:outline-slate-400' />
            </div>
            <div className='mt-8'>
                <h2 className='block text-2xl font-normal lg:text-3xl lg:font-bold lg:mb-2'>Pinned Blogs</h2>
                <div className='grid gap-5 py-4 lg:gap-8 lg:mt-0'>
                    {
                        filteredPins && filteredPins.map((item) => <HCard key={item._id} post={item} />)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='block text-2xl font-normal lg:text-3xl lg:font-bold lg:mb-2'>Blogs</h2>
                <div className='grid gap-5 py-4 lg:gap-8 lg:mt-0'>
                    {
                        filteredBlogs && filteredBlogs.map((item) => <HCard key={item._id} post={item} />)
                    }
                </div>
            </div>

        </div>
        <MailBox />
        <Footer />
    </div >;
}
export async function getStaticProps({ locale }: { locale: string }) {
    let tmp = allBlogs.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    const posts = tmp.filter((item: Blog) => item.pinned === false && item.locale === locale);
    let pinned = tmp.filter((item: Blog) => item.pinned === true && item.locale === locale);
    return { props: { posts, pinned } };
}
