import Navigation from '@/components/navigation'
import Header from './header';
import Footer from '../footer';
import MailBox from '@/layouts/mail';

import type { Snippets } from '.contentlayer/types'
type Props = {
    children: JSX.Element,
    snippet: Snippets

};
export default function SnippetPost({ children, snippet }: Props) {
    return (
        <div className='page-container'>
            <Navigation />
            <Header snippet={snippet}></Header>
            <article className='flexi-w p-4'>
                {children}
            </article>
            <MailBox />
            <Footer />
        </div>
    )
}
