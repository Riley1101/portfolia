import React from 'react'
import VCard from '@/components/vcard';
import styles from '@/styles/common/btn/index.module.css'
import Link from 'next/link'
const Features: React.FunctionComponent = () => {
    return (
        <div className='flexi-w'>
            <h2 className='block text-2xl font-normal text-white p-4 py-2 lg:text-3xl lg:font-bold lg:mb-2'>Featured Blogs</h2 >
            <div className='w-full grid grid-cols-1 p-4 gap-4 lg:grid-cols-3'>
                <VCard />
                <VCard />
                <VCard />
                <Link href='/blogs'>
                    <a href="" className={`${styles.btn} w-max text-sm text-white my-4`}>Read More</a>
                </Link>
            </div>

        </div>

    )
}

export default Features;