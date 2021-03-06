import React from 'react'
import styles from '@/styles/common/btn/index.module.css'
import Link from 'next/link'
import HCard from '@/components/hcard'
import type { Blog } from '.contentlayer/types';

interface Props {
    cases: Blog[],
    title: string
}

const CaseStudies: React.FunctionComponent<Props> = ({ cases, title }) => {
    return (
        <div className='flexi-w text-white p-4 pb-0 mx-auto cursor-pointer '>
            <p className='block text-2xl font-normal lg:text-4xl lg:font-bold lg:mb-2'>{title}</p >
            <div className='grid gap-5 py-4 lg:gap-8 lg:mt-2'>
                {
                    cases && cases.map((item) => <HCard key={item._id} post={item} />)
                }
                <Link href='/blogs'>
                    <a className={`${styles.btn}`}>More</a>
                </Link>
            </div>

        </div>

    )
}

export default CaseStudies;

