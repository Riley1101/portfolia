import Navigation from '@/components/navigation'
import Header from './header';
import type { Blog } from '.contentlayer/types'
type Props = {
    children: JSX.Element,
    post: Blog

};
export default function BlogPost({ children, post }: Props) {
    return (
        <div className='page-container'>
            <Navigation />
            <Header></Header>
            <article className='flexi-w p-4'>
                {children}
            </article>
        </div>
    )
}
