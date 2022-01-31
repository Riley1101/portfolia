// types
import type { NextPage } from 'next'

// components
import Navigation from '@/components/navigation';

const Snippets: NextPage = () => {
    return (
        <div className='font-nunito bg-primary-100 leading-relaxed p-2 grid gap-4 box-border lg:gap-6 min-h-screen'>
            <Navigation />
        </div>
    )
}

export default Snippets;
