import React from 'react';
import Navigation from '@/components/navigation';
import { allBlogs } from '.contentlayer/data'
import Image from 'next/image'
import type { Blog } from '.contentlayer/types';
import type { NextRouter } from 'next/router'
import NewsLetter from '@/components/newsletter';
import HCard from '@/components/hcard';
import Footer from '@/components/footer';
import { useBlogs } from '@/hooks/dist';
import Meta from '@/components/blog/meta';
import categories from '@/data/categories';
import { useRouter } from 'next/router';
type Props = {
    posts: Blog[],
};

let meta = {
    title: 'Inspiring / Blog',
    summary: 'Personal blog by @arkarkaungmyat',
    slug: 'arkardev.space/',
    image: '/static/sharing.png',
}

export default function Blogs({ posts: cases }: Props) {
    let [keyword, setKeyword] = React.useState('');
    let [category, setCategory] = React.useState('All')
    let [more, setMore] = React.useState(false)
    let { posts: filteredBlogs } = useBlogs({ posts: cases, keyword, category });
    const router: NextRouter = useRouter();
    let handleFilter = (ctx: string): void => {
        setCategory(ctx)
        if (ctx === 'All') {
            router.push({
                pathname: '/blogs',

            })
        } else {
            router.push({
                pathname: '/blogs',
                query: {
                    category: ctx
                }
            })
        }

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

            <div className='my-4 rounded-md flex'>
                <ul className={`scrollbar-none w-full flex items-center gap-2 overflow-x-scroll transition-all ${more && 'flex-wrap'}`}>
                    {categories.length > 6 && <li className={`bg-slate-800  min-w-[45px] px-4 py-2 rounded-md cursor-pointer transition-all ${more && `rotate-180`} `}
                        onClick={() => setMore(!more)}>
                        <Image src='/static/more.svg' alt='More' width={14} height={14} objectFit='cover' />
                    </li>}
                    <li className={`${category === 'All' ? 'bg-slate-900' : 'bg-slate-800'} text-sm px-4 py-2 rounded-md cursor-pointer`} onClick={() => handleFilter('All')}>All</li>
                    {
                        categories.map(ctx => <li onClick={() => handleFilter(ctx)} key={ctx} className={`${category === ctx ? 'bg-slate-900' : 'bg-slate-800'}  text-sm px-4 py-2 rounded-md cursor-pointer`}>{ctx}</li>)
                    }
                </ul>

            </div>
            <div className='grid gap-5 py-4 lg:gap-8 lg:mt-0'>
                {
                    filteredBlogs && filteredBlogs.map((item) => <HCard key={item._id} post={item} />)
                }
            </div>

        </div>
        <NewsLetter />
        <Footer />
    </div >;
}
export async function getStaticProps({ locale }: { locale: string }) {
    let tmp = allBlogs.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    const posts = tmp.filter((item: Blog) => item.locale === locale);
    return { props: { posts } };
}
