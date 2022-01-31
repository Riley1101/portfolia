import React from 'react';

type Props = {};

export default function Footer({ }: Props) {
    return <footer className='flexi-w px-4 text-white mb-8'>
        <hr className='w-3/4 mx-auto mb-6 bg-plae-100 opacity-10' />
        <div className='lg:grid lg:grid-cols-3'>
            <ul className='grid gap-2'>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Home</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Blogs</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>About</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Snippets</li>
            </ul>
            <ul className='grid gap-2'>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Twitter</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Facebook</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Github</li>
                <li className='text-pale-100 cursor-pointer hover:text-white'>Youtube</li>
            </ul>
        </div>


    </footer>;
}
