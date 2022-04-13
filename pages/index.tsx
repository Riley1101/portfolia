// types
import type { NextPage } from 'next'


// components
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import CaseStudies from '@/layouts/case_studies';
import Features from '@/layouts/features';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'
import Meta from '@/components/blog/meta';
import NewsLetter from '@/components/newsletter';

interface Props {
  blogs: Blog[],
  features: Blog[]
}

const Home: NextPage<Props> = ({ blogs, features }) => {
  let meta = {
    title: 'Arkar Kaung Myat',
    summary: 'Here you checkout everything about me and my programming life',
    slug: 'arkardev.space/',
    image: '/static/sharing.png',
  }
  return (
    <div className='page-container overflow-hidden'>
      <Meta post={meta} />
      <Navigation />
      <div className='absolute w-[250px] right-0 lg:w-[400px]  top-[10%] lg:right-20 aspect-square opacity-10 bg-no-repeat bg-hero-pattern' ></div>
      <div className=' top-[10%] right-20  md:w-[80%] md:mx-auto lg:absolute lg:w-[230px] xl:w-[350px]'>
        <Hero />
      </div>
      <CaseStudies cases={blogs} title={'Latests'} />
      <Features features={features} />
      {/* <MailBox /> */}
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  let tmp = allBlogs.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  let blogs = tmp.filter(item => item.pinned === false && item.locale === locale).slice(0, 3);
  const features = tmp.filter(item => item.pinned === true && item.locale === locale).slice(0, 3);
  return { props: { blogs, features } };
}
