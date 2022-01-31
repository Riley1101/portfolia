// types
import type { NextPage } from 'next'

// components
import Navigation from '@/components/navigation';
import CaseStudies from '@/layouts/case_studies';

const Cases: NextPage = () => {
    return (
        <div className='font-nunito bg-primary-100 leading-relaxed p-2   box-border  min-h-screen '>
            <Navigation />
            <CaseStudies />
        </div>
    )
}

export default Cases;
