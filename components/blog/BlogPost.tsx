import Navigation from '@/components/navigation'
import Header from './header';
import Footer from '../footer';
import Meta from './meta';
import MailBox from '@/layouts/mail';

import type { Blog } from '.contentlayer/types'
type Props = {
    children: JSX.Element,
    post: Blog
};
export default function BlogPost({ children, post }: Props) {
    return (
        <div className='page-container'>
            <Meta post={post} />
            <Navigation />
            <Header post={post}></Header>
            <article className='flexi-w p-4'>
                {children}
            </article>
            <MailBox />
            <Footer />
        </div>
    )
}
