// types
import type { NextPage } from 'next'
// components
import type { Snippets } from '.contentlayer/types';
import { allSnippets } from '.contentlayer/data'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@/components/mdx'
import SnippetPost from '@/components/snippet/snippetBlog'
interface Props {
    snippet: Snippets
}


const Blogs: NextPage<Props> = ({ snippet }) => {
    const MDXComponent = useMDXComponent(snippet.body.code);
    return (
        <SnippetPost snippet={snippet}>
            <MDXComponent components={components} />
        </SnippetPost>
    )
}

export default Blogs;

export async function getStaticPaths() {
    return {
        paths: allSnippets.map((p: { slug: any; }) => ({ params: { slug: p.slug } })),
        fallback: false
    };
}

export async function getStaticProps({ params }: any) {
    const snippet = allSnippets.find((snippet: { slug: any; }) => snippet.slug === params.slug);

    return { props: { snippet } };
}
