// types
import type { NextPage } from 'next'
import Snippet from '@/components/snippet';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
import { allSnippets } from '.contentlayer/data'
import type { Snippets } from '.contentlayer/types';
// components
import Navigation from '@/components/navigation';
import Meta from '@/components/blog/meta';
interface Props {
    snippets: Snippets[],
}
const SnippetsPage = ({ snippets }: Props) => {
    let meta = {
        title: 'Inspiring / Snippets',
        summary: 'Personal blog by @arkarkaungmyat',
        slug: 'arkardev.space/',
        image: '/static/sharing.png',
    }
    return (
        <div className='page-container'>
            <Meta post={meta} />
            <Navigation />
            <div className='flexi-w min-h-[60vh] p-4 text-white'>
                <h2 className='block text-2xl font-normal lg:text-4xl lg:font-bold lg:mb-2'>My Snippet Library</h2>
                <p className='my-3 text-pale-100'>Heres are some of my easy setup personal snippet collection.</p>
                <div className='w-full grid gap-2 mt-8 grid-cols-1 lg:grid-cols-2 '>
                    {
                        snippets && snippets.map((item) => <Snippet key={item._id} snippet={item} />)
                    }

                </div>
            </div>
            <MailBox />
            <Footer />
        </div>
    )
}

export default SnippetsPage;
export async function getStaticProps() {
    const snippets = allSnippets
    return { props: { snippets } };
}