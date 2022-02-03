// types
import type { NextPage } from 'next'
import Snippet from '@/components/snippets';
import MailBox from '@/layouts/mail';
import Footer from '@/components/footer';
// components
import Navigation from '@/components/navigation';
const Snippets: NextPage = () => {
    return (
        <div className='font-nunito bg-primary-100 leading-relaxed p-2 grid gap-4 box-border lg:gap-6 min-h-screen'>
            <Navigation />
            <div className='flexi-w min-h-[60vh] p-4 text-white'>
                <h2 className='block text-2xl font-normal lg:text-4xl lg:font-bold lg:mb-2'>My Snippet Library</h2>
                <p className='my-3 text-pale-100'>I do copy and paste.</p>
                <div className='w-full grid gap-2 mt-8 grid-cols-1 lg:grid-cols-2 '>
                    <Snippet />
                    <Snippet />
                    <Snippet />
                    <Snippet />
                    <Snippet />
                </div>
            </div>
            <MailBox />
            <Footer />
        </div>
    )
}

export default Snippets;
