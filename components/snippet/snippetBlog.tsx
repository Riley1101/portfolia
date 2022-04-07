import Navigation from '@/components/navigation'
import Header from './header';
import Footer from '../footer';
import MailBox from '@/layouts/mail';
import Meta from '@/components/blog/meta'

import type { Snippets } from '.contentlayer/types'
type Props = {
    children: JSX.Element,
    snippet: Snippets

};
let meta = {
    title: 'Inspiring / Snippets',
    summary: 'Personal blog by @arkarkaungmyat',
    slug: 'arkardev.space/',
    image: 'https://firebasestorage.googleapis.com/v0/b/arianagrande-a231e.appspot.com/o/Inspiring%20FRontend%20Developer(1).png?alt=media&token=d50ab1d9-782d-4457-8e63-2f952832f431',
}
export default function SnippetPost({ children, snippet }: Props) {
    meta.title = `Snippets / ${snippet.title}`
    meta.summary = snippet.summary
    meta.slug = `https://arkardev.space/snippet/${snippet.slug}`
    return (
        <div className='page-container'>
            <Meta post={meta} />
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
