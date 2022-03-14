import React from 'react'
import VCard from '@/components/vcard';
import type { Blog } from '.contentlayer/types'
interface Props {
    features: Blog[]
}

const Features: React.FunctionComponent<Props> = ({ features }) => {
    return (
        <div className='flexi-w my-8'>
            <p className='block text-2xl font-normal text-white p-4 py-2 lg:text-3xl lg:font-bold lg:mb-2'>Featured Blogs</p >
            <div className='w-full grid grid-cols-1 p-4 gap-4 lg:grid-cols-3 my-1'>
                {
                    features && features.map((item, index) => {
                        return (
                            <VCard key={index} blog={item} />
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Features;