// types
import type { NextPage } from 'next'
// components
import type { Blog } from '.contentlayer/types';
import { allBlogs } from '.contentlayer/data'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@/components/mdx'
import BlogPost from '@/components/blog/BlogPost'
interface Props {
  post: Blog
}


const Blogs: NextPage<Props> = ({ post }) => {
  const MDXComponent = useMDXComponent(post?.body?.code);

  if (!post) return <div>Translating .....</div>
  return (
    <BlogPost post={post}>
      <MDXComponent components={components} />
    </BlogPost>
  )
}

export default Blogs;

export async function getStaticPaths({ locales }: { locales: string[] }) {
  let paths: any = []
  allBlogs.map((p: { slug: any; }) => {
    for (let i = 0; i < locales.length; i++) {
      paths.push({ params: { slug: p.slug, locale: locales[i] } })
    }
  })
  return {
    paths: paths,
    fallback: true
  };
}

export async function getStaticProps({ params, locale }: { params: { slug: string }, locale: string }) {
  const post = allBlogs.find((post: Blog) => (post.slug === params.slug && post.locale === locale));
  return { props: { post } };
}
