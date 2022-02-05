import React from 'react'
import VCard from '@/components/vcard';

const Features: React.FunctionComponent = () => {
    return (
        <div className='flexi-w'>
            <h2 className='block text-2xl font-normal text-white p-4 py-2 lg:text-3xl lg:font-bold lg:mb-2'>Featured Blogs</h2 >
            <div className='w-full grid grid-cols-1 p-4 gap-4 lg:grid-cols-3 my-4'>
                <VCard alt />
                <VCard alt />
                <VCard alt />

            </div>

        </div>

    )
}

export default Features;