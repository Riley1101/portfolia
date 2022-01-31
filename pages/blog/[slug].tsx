// types
import type { NextPage } from 'next'
// components
import Navigation from '@/components/navigation';
import type { Blog } from '.contentlayer/types';
import { allBlogs } from '.contentlayer/data'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@/components/mdx'
import BlogPost from '@/components/blog/BlogPost'

interface Props {
  post: Blog
}


const Blogs: NextPage<Props> = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <div className='page-container'>
      <BlogPost post={post}>
        <MDXComponent components={components} />
      </BlogPost>
    </div>
  )
}

export default Blogs;

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p: { slug: any; }) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const post = allBlogs.find((post: { slug: any; }) => post.slug === params.slug);

  return { props: { post } };
}
