import React from 'react'
import styles from '@/styles/common/btn/index.module.css'
import Link from 'next/link'
import HCard from '@/components/hcard'
import type { Blog } from '.contentlayer/types';

interface Props {
    cases: Blog[],
}

const CaseStudies: React.FunctionComponent<Props> = ({ cases }) => {
    return (
        <div className='flexi-w text-white p-4 pb-0 mx-auto cursor-pointer '>
            <h2 className='block text-2xl font-normal lg:text-3xl lg:font-bold lg:mb-2'>Case Studies</h2 >
            <div className='grid gap-5 py-4 lg:gap-6'>
                {
                    cases && cases.map((item) => <HCard key={item._id} post={item} />)
                }
                <Link href='/studies'>
                    <a className={`${styles.btn} w-max btn text-sm`}>More</a>

                </Link>
            </div>

        </div >

    )
}

export default CaseStudies;

