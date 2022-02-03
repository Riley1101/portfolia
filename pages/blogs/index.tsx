import React from 'react';
import Navigation from '@/components/navigation';
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types';
import HCard from '@/components/hcard';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
import { useBlogs } from '@/hooks/dist';

type Props = {
    posts: Blog[],
    pinned: Blog[]
};

export default function Blogs({ posts: cases, pinned }: Props) {
    let [keyword, setKeyword] = React.useState('');
    let { posts: filteredBlogs, pinned: filteredPins } = useBlogs({ posts: cases, pinned, keyword });

    return <div className='page-container'>
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
export async function getStaticProps() {
    const posts = allBlogs.filter((item: Blog) => item.pinned === false);
    let pinned = allBlogs.filter((item: Blog) => item.pinned === true);
    return { props: { posts, pinned } };
}
