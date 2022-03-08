import Navigation from '@/components/navigation'
import Header from './header';
import Footer from '../footer';
import Meta from './meta';
import MailBox from '@/layouts/mail';
import LoveReact from '@/components/lovereact';
import type { Blog } from '.contentlayer/types'
import { Blocks } from '@prisma/client'
import { useBlockQuery } from '@/queries/blockreact';
import Frame from '@/components/iframe';
type Props = {
    children: JSX.Element,
    post: Blog
};

type LoveProps = {
    data: Blocks,
    block: {
        data: Blocks
    }
}
export default function BlogPost({ children, post }: Props) {
    let { data } = useBlockQuery();
    let block: LoveProps = data?.data;
    return (
        <div className='page-container relative'>
            <Meta post={post} />
            <Navigation />
            <Header post={post}></Header>
            <article className='flexi-w p-4'>

                {children}
            </article>
            {

                block && <LoveReact block={block} />
            }

            <MailBox />
            <Footer />
        </div>
    )
}
