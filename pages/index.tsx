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
interface Props {
  blogs: Blog[],
  features: Blog[]
}

const Home: NextPage<Props> = ({ blogs, features }) => {
  console.log(features)
  return (
    <div className='page-container overflow-hidden'>
      <Navigation />
      <div className='absolute w-[250px] right-0 lg:w-[400px]  top-[10%] lg:right-20 aspect-square opacity-10 bg-no-repeat bg-hero-pattern ' ></div>
      <div className=' top-[10%] right-20  md:w-[70%] md:mx-auto lg:absolute lg:w-[230px] xl:w-[350px]'>
        <Hero />
      </div>
      <CaseStudies cases={blogs} title={'Latests'} />
      <Features features={features} />
      <MailBox />
      <Footer />
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const blogs = allBlogs.filter(item => item.pinned === false).slice(0, 3);
  const features = allBlogs.filter(item => item.pinned === true).slice(0, 3);
  return { props: { blogs, features } };
}
