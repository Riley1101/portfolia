import React from 'react';
import Image from 'next/image'
type Props = {};
export default function Header({ }: Props) {
    return <header className='flexi-w grid gap-4 lg:p-4'>
        <h1 className='text-white text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal '>Every thing I learnt from a trip to Norway </h1>
        <div className='flex text-white justify-between items-center'>
            <div className='flex gap-4'>
                <div className='w-12 aspect-square relative'>
                    <Image src="/static/profile.jpg" alt="header" layout='fill' className='rounded-full' />
                </div>
                <span className='text-pale-100 text-sm'>Arkar Kaung Myat <br /> Aug 07, 2019</span>
            </div>
            <div className='text-pale-100'>
                12 min read
            </div>
        </div>
    </header>;
}
