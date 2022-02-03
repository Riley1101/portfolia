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

const Home: NextPage<any> = ({ cases, posts }) => {
  console.log(cases)
  return (
    <div className='page-container'>
      <Navigation />
      <Hero />
      <CaseStudies cases={cases} title={'Latests'} />
      <Features />
      <MailBox />
      <Footer />
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const cases = allBlogs.slice(0, 3);
  const posts = allBlogs.slice(0, 3);
  return { props: { cases, posts } };
}
